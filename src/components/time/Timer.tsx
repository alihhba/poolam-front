// src/components/ui/Timer.tsx
import React, {useCallback, useEffect, useState, forwardRef, useImperativeHandle} from 'react';

type TimerMode = 'countdown' | 'countup';
type TimerVariant = 'digital' | 'text';
type TimerSize = 'sm' | 'md' | 'lg';

interface TimerProps {
    targetDate: string; // ISO string
    mode: TimerMode;
    variant?: TimerVariant;
    size?: TimerSize;
    className?: string;
    onComplete?: () => void;
    showLabels?: boolean;
    autoStart?: boolean;
    showH?: boolean,
    showM?: boolean,
    showS?: boolean,
    completedComponent?: React.ReactNode;
    onStateChange?: (completed: boolean) => void;
}

interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    totalMilliseconds: number;
    isCompleted: boolean;
    isRunning: boolean;
}

export interface TimerRef {
    reset: () => void;
    pause: () => void;
    resume: () => void;
    getTime: () => TimeRemaining;
}

export const Timer = forwardRef<TimerRef, TimerProps>(function Timer({
                                                                         targetDate,
                                                                         mode,
                                                                         variant = 'digital',
                                                                         size = 'md',
                                                                         className,
                                                                         onComplete,
                                                                         showLabels = false,
                                                                         autoStart = true,
                                                                         showS = true,
                                                                         showM = true,
                                                                         showH = true,
                                                                         completedComponent,
                                                                         onStateChange
                                                                     }: TimerProps, ref) {
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalMilliseconds: 0,
        isCompleted: false,
        isRunning: autoStart,
    });
    const [isClient, setIsClient] = useState(false);

    // Ensure we're on client side to avoid hydration issues
    useEffect(() => {
        setIsClient(true);
    }, []);

    const calculateTime = useCallback((): Omit<TimeRemaining, 'isRunning'> => {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        let difference = mode === 'countdown' ? target - now : now - target;

        // If counting up and target is in future, start from 0
        if (mode === 'countup' && target > now) {
            difference = 0;
        }

        if (difference <= 0 && mode === 'countdown') {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                totalMilliseconds: 0,
                isCompleted: true,
            };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
            totalMilliseconds: difference,
            isCompleted: mode === 'countdown' && difference <= 0,
        };
    }, [targetDate, mode]);

    const resetTimer = useCallback(() => {
        const initialTime = calculateTime();
        setTimeRemaining({
            ...initialTime,
            isRunning: autoStart,
        });
    }, [calculateTime, autoStart]);

    const pauseTimer = useCallback(() => {
        setTimeRemaining(prev => ({ ...prev, isRunning: false }));
    }, []);

    const resumeTimer = useCallback(() => {
        setTimeRemaining(prev => ({ ...prev, isRunning: true }));
    }, []);

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
        reset: resetTimer,
        pause: pauseTimer,
        resume: resumeTimer,
        getTime: () => timeRemaining,
    }), [resetTimer, pauseTimer, resumeTimer, timeRemaining]);

    useEffect(() => {
        if (!isClient || !timeRemaining.isRunning) return;

        const timer = setInterval(() => {
            const newTime = calculateTime();

            setTimeRemaining(prev => ({
                ...newTime,
                isRunning: prev.isRunning,
            }));

            if (newTime.isCompleted && onComplete) {
                onComplete();
                setTimeRemaining(prev => ({...prev, isRunning: false}));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [isClient, calculateTime, onComplete, timeRemaining.isRunning]);

    // Initialize timer on mount
    useEffect(() => {
        if (isClient) {
            const initialTime = calculateTime();
            setTimeRemaining(prev => ({
                ...initialTime,
                isRunning: prev.isRunning,
            }));
        }
    }, [isClient, calculateTime]);

    useEffect(() => {
        if (timeRemaining.isCompleted && onStateChange) {
            onStateChange(true);
        }
    }, [timeRemaining.isCompleted, onStateChange]);

    // const toggleTimer = () => {
    //     setTimeRemaining(prev => ({...prev, isRunning: !prev.isRunning}));
    // };

    // Size classes
    const sizeClasses = {
        sm: {
            digital: 'text-sm',
            text: 'text-xs',
            segment: 'w-6 h-8',
        },
        md: {
            digital: 'text-lg',
            text: 'text-sm',
            segment: 'w-8 h-12',
        },
        lg: {
            digital: 'text-2xl',
            text: 'text-lg',
            segment: 'w-12 h-16',
        },
    };

    // Format numbers with leading zeros
    const formatNumber = (num: number): string => {
        return num.toString().padStart(2, '0');
    };

    if (!isClient) {
        return (
            <div className={`flex justify-center items-center ${className}`}>
                <div className="animate-pulse bg-gray-200 rounded-lg w-32 h-8"/>
            </div>
        );
    }

    if (timeRemaining.isCompleted && completedComponent) {
        return <div>{completedComponent}</div>;
    }

    if (variant === 'digital') {
        return (
            <div className={`flex w-fit items-center ${className}`}>
                <div className={`flex items-center flex-row-reverse font-bold ${sizeClasses[size].digital}`}>
                    {timeRemaining.days > 0 && (
                        <>
                            <span className="">{formatNumber(timeRemaining.days)}</span>
                            <span>:</span>
                        </>
                    )}
                    {showH ? (
                        <span className="w-6 flex items-center justify-center">{formatNumber(timeRemaining.hours)}</span>
                    ) : null}
                    {showH ? (
                        <span>:</span>
                    ) : null}
                    {showM ? (
                        <span className="w-6 flex items-center justify-center">{formatNumber(timeRemaining.minutes)}</span>
                    ) : null}
                    {showM ? (
                        <span>:</span>
                    ) : null}
                    {showS ? (
                        <span className="w-6 flex items-center justify-center">{formatNumber(timeRemaining.seconds)}</span>
                    ) : null}
                </div>

                {showLabels && (
                    <div className={`flex justify-between w-full mt-1 text-gray-500 ${sizeClasses[size].text}`}>
                        {timeRemaining.days > 0 && <span>Days</span>}
                        <span>Hours</span>
                        <span>Minutes</span>
                        <span>Seconds</span>
                    </div>
                )}

                {/*<div className="flex space-x-2 mt-2">*/}
                {/*    <button*/}
                {/*        onClick={toggleTimer}*/}
                {/*        className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"*/}
                {/*    >*/}
                {/*        {timeRemaining.isRunning ? 'Pause' : 'Resume'}*/}
                {/*    </button>*/}
                {/*    <button*/}
                {/*        onClick={resetTimer}*/}
                {/*        className="px-3 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"*/}
                {/*    >*/}
                {/*        Reset*/}
                {/*    </button>*/}
                {/*</div>*/}

                {/*{timeRemaining.isCompleted && mode === 'countdown' && (*/}
                {/*    <div className="mt-2 text-red-500 font-semibold text-sm">*/}
                {/*        Time's up!*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        );
    }

    // Text variant
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <div className={`text-center ${sizeClasses[size].text}`}>
                {timeRemaining.days > 0 && (
                    <span className="font-semibold">{timeRemaining.days}</span>
                )}
                <span className="font-semibold">{timeRemaining.hours}</span>
                <span className="font-semibold">{timeRemaining.minutes}</span>
                <span className="font-semibold">{timeRemaining.seconds}</span>
                <span className="ml-2 text-gray-500">
          {mode === 'countdown' ? 'remaining' : 'elapsed'}
        </span>
            </div>
            {timeRemaining.isCompleted && mode === 'countdown' && (
                <div className="mt-2 text-red-500 font-semibold text-sm">
                    Time's up!
                </div>
            )}
        </div>
    );
});
