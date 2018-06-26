import React, { Component } from 'react';

class JobDetailPage extends Component{

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Job Detail
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">job</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Bordered Table</h3>
                                </div>
                                <div className="box-body">
                                    <table className="table table-bordered">
                                        <tbody><tr>
                                            <th>#</th>
                                            <th>Task</th>
                                            <th>Progress</th>
                                            <th>Label</th>
                                        </tr>
                                        <tr>
                                            <td>1.</td>
                                            <td>Update software</td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-danger"></div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-red">55%</span></td>
                                        </tr>
                                        <tr>
                                            <td>2.</td>
                                            <td>Clean database</td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-yellow"></div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-yellow">70%</span></td>
                                        </tr>
                                        <tr>
                                            <td>3.</td>
                                            <td>Cron job running</td>
                                            <td>
                                                <div className="progress progress-xs progress-striped active">
                                                    <div className="progress-bar progress-bar-primary"></div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-light-blue">30%</span></td>
                                        </tr>
                                        <tr>
                                            <td>4.</td>
                                            <td>Fix and squish bugs</td>
                                            <td>
                                                <div className="progress progress-xs progress-striped active">
                                                    <div className="progress-bar progress-bar-success"></div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-green">90%</span></td>
                                        </tr>
                                        </tbody></table>
                                </div>
                                <div className="box-footer clearfix">
                                    <ul className="pagination pagination-sm no-margin pull-right">
                                        <li><a href="#">«</a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">»</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default JobDetailPage;