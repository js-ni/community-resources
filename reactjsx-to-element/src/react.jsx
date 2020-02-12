class Buffered extends React.Component {
    render() {
        return (
            <div className="holder">
                <div className="demo">
                    <div className="rkmd-slider slider-continuous slider-shadow slider-lightBlue slider-light"
                         id="music-rock">
                        <input type="range" min="0" max="175"/>
                        <div className="slider">
                            <div className="slider-fill"/>
                            <div className="slider-handle"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}