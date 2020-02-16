import React, { useState } from 'react';
import Highcharts from 'react-highcharts';

const GetData = () => {
    const [date,setDate]=useState('');
    const [amount,setAmount]=useState('');
    const [spent,setSpent]=useState('');
    const [dataSpent,setspentData]=useState([]);
    const [dates,setDates]=useState([]);
    
    let options = {
        title: {
            text: 'react-highcharts'
        },
        subtitle: {
            text: 'interview'
        },
        yAxis: {
            title: {
                text: 'Spent'
            }
        },
        xAxis: {
            title: {
                text: 'Date'
            },
            type:'datetime',
            dateTimeLabelFormats: {
                day: '%Y-%b-%e'

            }
        },
        series: [{
            name: 'Spent',
            data: [],
            pointStart: Date.UTC(2019,0,1),
            pointInterval: 24 * 3600 * 1000
        }]
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        dates.push(date);
        dataSpent.push(parseInt(spent));
        setDate('');
        setAmount('');
        setSpent('');
    }
    const handleChart=(e)=>{
        e.preventDefault();
        options.series[0].data=dataSpent;
        Highcharts.Highcharts.chart('container',options);
        console.log(options.series[0].data);
    }
    return (
        <div>
          <form className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group ml-2">
                <label htmlFor="Date">Date</label>
                <input type="date" className="form-control ml-1" id="Date" value={date} onChange={e=>setDate(e.target.value)}/>
            </div>
            <div className="form-group ml-2">
                <label htmlFor="Amount">Amount</label>
                <input type="number" className="form-control ml-1" id="Amount" value={amount} onChange={e=>setAmount(e.target.value)}/>
            </div>
            <div className="form-group ml-2">
                <label htmlFor="Spent">Spent</label>
                <input type="number" className="form-control ml-1" id="Spent" value={spent} onChange={e=>setSpent(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary ml-2">Process</button>
          </form>
          <hr />
          <form onSubmit={handleChart}>
              <div className="form-row align-items-center">
                  <div className="col my-1">
                      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                          <option>X AXIS (Date)</option>
                          {dates && dates.map(onedate=>{
                              return <option value={onedate} key={onedate}>{onedate}</option>
                            })
                          }

                      </select>
                  </div>
                  <div className="col my-1">
                      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                          <option>Y AXIS (Spent)</option>
                          {dataSpent && dataSpent.map(item=>{
                              return <option value={item} key={item}>{item}</option>
                            })
                          }
                          
                      </select>
                  </div>
                  <div className="col my-1">
                      <button type="submit" className="btn btn-success">Apply</button>
                  </div>
              </div>
          </form>
          <hr/>
          <figure className="highcharts-figure">
              <div id="container"></div>
          </figure>
        </div>
    )
}

export default GetData
