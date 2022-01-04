import { useState } from "react"



function Reviews() {
    const [data, setData] = useState(
        {
            id: "001",
            author: "albert",
            body: "Whats the status?",
            timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
            points: "2",
            replies: [
                {
                    id: "003",
                    author: "haren",
                    body: "Wrote the test suites, waiting for approval?",
                    timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
                    points: "3",
                    replies: [
                        {
                            id: "004",
                            author: "albert",
                            body: "Thanks for the update!",
                            timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
                            points: "8"
                        }
                    ]
                },
                {
                    id: "002",
                    author: "Nrupul",
                    body: "looking forward for the demo!",
                    timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
                    points: "2"
                }
            ]
        }
    )
    const [reply, setReply] = useState(true)
    const [com, setCom] = useState(true)
    const handleclick = () => {
        setReply(!reply)
    }
    const handlecom = () => {
        setCom(!com)
    }

    return (
        <>

            <div id="abdata">
                <h4>{data.author}</h4>
                <h4>{data.points} points</h4>
                <h4>{data.timestamp}</h4>
            </div>
            <button id="btn" onClick={handleclick}>+</button>
            <h3 id="status">{data.body}</h3>
            <div id="com">
                <h3>Reply</h3>
                <h3>Give Award</h3>
                <h3>Share</h3>
                <h3>Report</h3>
                <h3>Save</h3>
            </div>
            {reply ?
                <div></div> :
                <div>
                    <div id="zero">
                        <h4>{data.replies[0].author}</h4>
                        <h4>{data.replies[0].points} points</h4>
                        <h4>{data.replies[0].timestamp}</h4>
                    </div>
                    <button id="btn1" onClick={handlecom}>+</button>
                    <h3 id="status1">{data.replies[0].body}</h3>
                    <div id="com1">
                        <h3>Reply</h3>
                        <h3>Give Award</h3>
                        <h3>Share</h3>
                        <h3>Report</h3>
                        <h3>Save</h3>
                    </div>
                    {com ?
                        <div></div> :
                        <div>
                            <div id="zero1">
                                <h4>{data.replies[0].replies[0].author}</h4>
                                <h4>{data.replies[0].replies[0].points} points</h4>
                                <h4>{data.replies[0].replies[0].timestamp}</h4>
                            </div>
                            <h3 id="status2">{data.replies[0].replies[0].body}</h3>
                            <div id="com2">
                                <h3>Reply</h3>
                                <h3>Give Award</h3>
                                <h3>Share</h3>
                                <h3>Report</h3>
                                <h3>Save</h3>
                            </div>
                        </div>
                    }
                    <div id="zero">
                        <h4>{data.replies[1].author}</h4>
                        <h4>{data.replies[1].points} points</h4>
                        <h4>{data.replies[1].timestamp}</h4>
                    </div>
                    <h3 id="status1">{data.replies[1].body}</h3>
                    <div id="com1">
                        <h3>Reply</h3>
                        <h3>Give Award</h3>
                        <h3>Share</h3>
                        <h3>Report</h3>
                        <h3>Save</h3>
                    </div>
                </div>
            }
        </>
    )
}

export { Reviews }