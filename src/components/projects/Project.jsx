import React, { Component } from 'react'
import './projects.scss';
export default class Project extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <img className='img-projects' src={this.props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.content}</p>
                        <div className='d-flex justify-content-center'>
                            <a href={this.props.linkView} className='btn btn-outline-danger mx-1' target='_blank'>Project</a>
                            <a href={this.props.linkCode} className='btn btn-outline-danger mx-1' target='_blank'>Code</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
