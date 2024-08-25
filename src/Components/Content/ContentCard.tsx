
export default function ContentCard(props: any){
    return(
        
        <div className=""> 
          <p className="">{props.number}</p>
          <p className=''>{props.subtitle}</p>
          <h1 className="">{props.title}</h1>
          <p className=''>{props.description}</p>
          <a className='' href={props.link}>read more</a>
          <img className="" src={props.image} alt={props.title} />
        </div>
     
    )
}

ContentCard