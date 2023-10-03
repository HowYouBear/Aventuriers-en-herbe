import { useEffect, useRef, useState } from "react";

//Composant state:
const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

// function fade parameters:
// visible: défini si l'élément est visible
// children: récupére les données de l'enfant àfin d'ajouter le contenu de l'enfant à l'animation
// duration: la temps en ms de l'animation (par default 1s)
// animateEnter: lance l'animation à l'ouverture de la page si la valeur est true
// from: define css. Only from.opacity is used ATM. default value at 0.
function Fade({
    visible,
    children,
    duration = 1000,
    animateEnter = false,
    from = {opacity: 0}
}){

    const childRef = useRef(children);
    const [state, setState] = useState(visible ? (animateEnter ? ENTERING : VISIBLE) : HIDDEN)
    const className = state === VISIBLE ? "fade" : "fade out";

    //Garde une référence de l'enfant afin d'éviter l'instant fade out appliquer sur l'enfant. on display la référence plutôt que l'enfant lui même pour garder l'effet.
    if(visible){
        childRef.current = children;
    }

    useEffect(() =>{
        if(!visible){
            setState(LEAVING);
        } else {
            setState((s) => s === HIDDEN ? ENTERING : VISIBLE);
        }
    }, [visible])

    useEffect(() =>{
        if(state === LEAVING){
            const timer = setTimeout(() => {
                setState(HIDDEN);
            }, duration);
            return () =>{
                clearTimeout(timer);
            }
        } else if(state === ENTERING){
            document.body.offsetHeight; //force rendering
            setState(VISIBLE);
        }
    }, [state])

    if(state === HIDDEN){
        return null;
    }

    
    let style = {
        transitionDuration: `${duration}ms`,
        transitionProperty: "opacity transform"}
    if(state !== VISIBLE){
        if(from.opacity !== undefined){ // 0 != undefined
            style.opacity = from.opacity;
        }
    }

    return(
        <div style={style}>
            {childRef.current}
        </div>
    )
}

export default Fade;