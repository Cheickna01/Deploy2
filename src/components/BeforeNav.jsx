import React from "react";
 export default class BeforeHeader extends React.Component {

    componentDidMount(){
        this.animation()
    }

    animation(){
        var  elem= document.getElementById("move")
        var pos= 0
        setInterval(frame,15)

        function frame(){
            if(pos === document.body.clientWidth){
                pos = -10
            }else{
                pos++
                elem.style.left = pos + "px"
            }
        }
    }
    render(){
        return (
            <div className="topNavBar col-12 d-none d-lg-block text-center">
                <p id="move">Le meilleur site de streaming au Maroc</p>
            </div>
        )
    }
 }