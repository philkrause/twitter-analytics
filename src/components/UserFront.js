import React from 'react'
import AreaChart from './AreaChart'
import Plot from './Plot';
import GroupChart from './GroupChart'



export default function UserFront(props) {

  return (
    <>
      <section className='tableuser'>
        <a href={props.url}><img src={props.img} /></a>
        <div className='userinfo'>
          <h3>{props.name}</h3>
          <a href={props.url}><p>{props.handle}</p></a>
          <p>{props.joined}</p>
        </div>
        <section className='followers'>
          <h3>followers</h3>
          <p> {props.followers}</p>
        </section>
        <section className='followers'>
          <h3>tweets</h3>
          <p> {props.tweets}</p>
        </section>
        <section className='followers'>
          <h3>following</h3>
          <p> {props.following}</p>
        </section>
        <GroupChart />
        <Plot />

      </section>

    </>
  )

}