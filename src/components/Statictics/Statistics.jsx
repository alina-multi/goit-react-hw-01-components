// import PropTypes from 'prop-types';

export const Statistics = ({ data , title }) => { 

    return  <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <StaticticsList data={data}/>
    </section>;   

}

export const StaticticsList = ({data}) => { 
    return <ul className="stat-list" >
                {data.map(data => 
                <StaticticsItem key={data.id} data={data}/> )
} 
    </ul>
}

export const StaticticsItem = ({data}) => { 
    return <li className="item" >
        < span className="label" > {data.label}</span>
        <span className="percentage">{data.percentage}</span>
    </li>;
}


// использовать children 
// добавить icon react

<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>