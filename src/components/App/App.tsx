import React from 'react';
import Clock from "../Clock/Clock";

interface IGotDataFromOuterApi {
    datatime: string
}

function App() {
    const [dataTimeFromOuterApi, setDataTimeFromOuterApi] = React.useState<Date>(new Date());

    React.useEffect(() => {
        fetch("http://worldtimeapi.org/api/timezone/Europe/Moscow")
            .then(res => res.json())
            .then(parsedTime => {
                setDataTimeFromOuterApi(new Date((parsedTime as IGotDataFromOuterApi).datatime));
            });
    }, []);

    return (
        <div className="App">
            <Clock dataTime={dataTimeFromOuterApi} />
        </div>
    );
}

export default App;
