import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
    state = { movie: [] , tv:[]}
    trendingMovies = async (mediaType) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361`);
        this.setState({[mediaType]: data.results });
    }
    componentDidMount() {
        this.trendingMovies('movie');
        this.trendingMovies('tv');
    }
    render() {
        return (
            <>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item">
                                <div className="brdr w-25"></div>
                                <h1>Trending <br /> Movies <br /> To Watch Now</h1>
                                <p className='secondFontColor'>Most Watched Movies By Days</p>
                                <div className="brdr w-100"></div>
                            </div>
                        </div>
                        {this.state.movie.slice(0,8).map((value, index) => {
                            return (
                                <div key={index} className="col-md-4 my-3">
                                    <div className="item">
                                        <img className='w-100 rounded' src={'https://image.tmdb.org/t/p/original' + value.backdrop_path} alt="" />
                                        <h5 className='mt-2'>{value.title}</h5>
                                        <span className='votings'>{value.vote_average}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item">
                                <div className="brdr w-25"></div>
                                <h1>Trending <br /> Series <br /> To Watch Now</h1>
                                <p className='secondFontColor'>Most Watched Series By Days</p>
                                <div className="brdr w-100"></div>
                            </div>
                        </div>
                        {this.state.tv.slice(0, 8).map((value, index) => {
                            return (
                                <div key={index} className="col-md-4 my-3">
                                    <div className="item">
                                        <img className='w-100 rounded' src={'https://image.tmdb.org/t/p/original' + value.backdrop_path} alt="" />
                                        <h5 className='mt-2'> {value.name}</h5>
                                        <span className='votings'>{value.vote_average}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}
