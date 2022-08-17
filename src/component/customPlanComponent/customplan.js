import React from "react";
import '../style.css'
import useScript from "../../hooks/useScript";
import {useForm} from 'react-hook-form';

export const CustomPlan = (props) => {
    useScript('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js');
    useScript('https://cdn.startbootstrap.com/sb-forms-latest.js');
    useScript('../scripts.js');
    const title = 'DEI Advocacy Custom Plan';
    const details = 'Based on the inputs you give us, we will create a custom plan to help you with the DEI issue that you face';
    const item1 = 'How to Identify Oppression at Work';
    const item2 = 'How to Identify Racism at Work';


    const {register, handleSubmit} = useForm();

    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);


    return (
        <div id="page-top">
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <h1>{title}</h1>
                    <p>{details}</p>
                </div>
            </header>
            <section className="page-section portfolio" id="portfolio">
                <form onSubmit={handleSubmit(onSubmit, onError)} className='container'>
                    <div className="container">
                        <div className="row">
                            <label className='col-3' htmlFor='ageGroup'>Age group:</label>

                            <input className='col-7' {...register("ageGroup")} id='ageGroup'/>
                        </div>
                        <br/>
                        <div className="row">
                            <label className='col-3' htmlFor='gender'>Gender:</label>
                            <input className='col-7' {...register("gender")} id='gender'/>
                        </div>
                        <br/>
                        <div className="row">
                            <label className='col-3' htmlFor='name'>Name:</label>
                            <input className='col-7' {...register("name")} id='name'/>
                        </div>
                        <br/>
                        <div className="row">
                            <div className='col-9'></div>
                            <div className='col-1'>
                                <button type="submit">Create</button>
                            </div>
                        </div>

                        {/* <div className="col">
                            
                            
                        </div>
                        <div className="col">
                            
                        </div>
                        <div className="col">
                           
                        </div>
                        */}

                    </div>
                </form>

            </section>

        </div>
    )
}