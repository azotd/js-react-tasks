import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)

export default class Carousel extends React.Component {
    state = { current: 0 };

    prevSlide = () => {
        const { images } = this.props;
        const { current } = this.state;
        const prev = current > 0 ? current - 1 : images.length - 1;
        this.setState({ current: prev });
    };

    nextSlide = () => {
        const { images } = this.props;
        const { current } = this.state;
        const next = current < images.length - 1 ? current + 1 : 0;
        this.setState({ current: next });
    };

    render() {
        const { images } = this.props;
        const { current } = this.state;

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={cn('carousel-item', { active: i === current })}
                        >
                            <img alt="" className="d-block w-100" src={img} />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="prev"
                    onClick={this.prevSlide}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="next"
                    onClick={this.nextSlide}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}
// END