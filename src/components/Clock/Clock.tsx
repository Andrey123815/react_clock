import React from 'react';
import './Clock.css';

interface ITime {
    dataTime: Date
}

const degStep: number = 6;

const Clock = (props: ITime) => {
    let transformHoursStyle: string = '', transformMinutesStyle: string = '', transformSecondsStyle: string = '';
    const [clock, setClock] = React.useState<Date>(new Date(props.dataTime));

    React.useEffect(() => {
        const clock = setInterval(
            (): void => setClock(new Date()),
            1000
        );

        return () => {
            clearInterval(clock);
        };
    }, []);

    transformHoursStyle = `rotateZ(${(clock.getHours() * 30) + (clock.getMinutes() * degStep / 12)}deg)`;
    transformMinutesStyle = `rotateZ(${clock.getMinutes() * degStep}deg)`;
    transformSecondsStyle = `rotateZ(${clock.getSeconds() * degStep}deg)`;

    return (
        <div className="clock">
            <div className="hours">
                <div className="hours__hour-arrow"
                     style={{transform: transformHoursStyle}}
                ></div>
            </div>

            <div className="minutes">
                <div className="minutes__minute_arrow"
                     style={{transform: transformMinutesStyle}}
                ></div>
            </div>

            <div className="seconds">
                <div className="seconds__second-arrow" style={{transform: transformSecondsStyle}}
                ></div>
            </div>
        </div>
    );
};

export default Clock;

