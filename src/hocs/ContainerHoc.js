const ContainerHOC = (props) => {
    console.log(props)
    return <div className="container_hoc">
        <h1> Container HOC </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem fugiat amet ex accusantium? Nisi architecto accusamus soluta? Sed quidem nisi corrupti accusamus consequatur dolores illo? Fugiat cumque consequuntur ut minus?</p>
        {props.children}
    </div>
}

export default ContainerHOC;