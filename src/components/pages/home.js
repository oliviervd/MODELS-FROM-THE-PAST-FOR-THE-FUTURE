import React, {Suspense} from "react";
import {Link} from "react-router-dom";

const XenoHeader = React.lazy(() => import("../elements/xenoHeader"))
const Sketch_ModelsGrid = React.lazy(() => import("../sketches/Sketch_ModelsGrid"))
const CubicBezier = React.lazy(()=> import("../sketches/cubicBezier"));

const SketchPlaceHolder = React.lazy(()=> import("../sketches/sketchPlaceHolder"))

const Home = () => {
    return(
        <div>
            <Suspense>
                <XenoHeader header_main={true} header_models={true} header_model={false}/>
            </Suspense>
            <div className="rowScrollMain">
                <div style={{marginBottom: "-600px"}}>
                    <Suspense>
                        <CubicBezier/>
                    </Suspense>
                </div>
                <div  style={{height: "200vh"}}>

                    {/* curatorial statement (text) */}
                    <div className="grid--3_4_3">
                        <div className="background__transparent">
                        </div>
                        <div className="background__white" style={{height: "auto", padding: "80px"}}>
                            <h1 style={{fontFamily:"happy-times-NG_bold_master_web", fontSize: "60px", textAlign: "center"}}>CURATORIAL STATEMENT</h1>
                            <p style={{fontFamily: "happy-times-NG_italic_master_web"}} className="text">“I then turned my microscope to the cognition engine… This was an engine undergoing continuous transformation,
                                indeed modifying itself as part of its operations. The lattice was not so much a machine as it was a page on
                                which the machine was written, and on which the machine itself ceaselessly wrote.” (Chiang, T. , 2019. Exhalation.)</p>
                            <br/>
                            <p className="center text" style={{fontFamily: "happy-times-NG_regular_master_web"}}><strong>MODELS FROM THE PAST FOR THE FUTURE </strong>
                                is a curatorial experiment and post-digital discourse looking into past, future and speculative models, and
                                takes place during the closure of the Design Museum Ghent (2022-2025). As such this exercise positions
                                itself in a period of transition where past, present and future interlock. By focusing on the medium-specificity of the web, it investigates new curatorial strategies that better reflect
                                the intricacies, complexities and plural nature of design of design practice in its current context. As a prototype for an alternative system, it is
                                always critically probing new forms of knowledge production. And in its growth, it is both reflective
                                and performative in nature, as we embrace the (as yet) unknown in its potential.</p>
                            <ul>
                                <h4 className="center" style={{fontFamily:"lineal"}}>* </h4> <p className="center text" style={{fontFamily: "happy-times-NG_regular_master_web"}}> as a <strong> dynamic network</strong>; the project is in constant evolution and critically approaches the
                                underlying metabolism of the museum as an institution. No "rinse and repeat" but a form of
                                "slow programming", a slow burning change, that takes time for getting to know itself. Because whoever wants to shape
                                the future, will have to know its past.</p>
                            </ul>
                            <ul>
                                <h4 className="center" style={{fontFamily:"lineal"}}>* </h4> <p className="center text" style={{fontFamily: "happy-times-NG_regular_master_web"}}> As a <strong>living archive</strong>; it approaches the past as an asset for the present and the future.
                                A growing organ, which absorbs, processes and discards. The intertwining of traces of the past
                                with visions for the future. </p>
                            </ul>
                            <p className="center text" style={{fontFamily: "happy-times-NG_regular_master_web"}}>Above all, it eschews the classically oriented forms of -indexation and collection discovery.
                                The collection database may be the starting point of this search, but its finality lies precisely
                                in the critical questioning of the one-to-one translation of its structure in making the collection public.</p>
                        </div>
                        <div className="background__transparent" style={{height: "50vh"}}/>
                    </div>
                    {/* curatorial statement (text) */}

                    <br/><br/><br/><br/><br/><br/>

                    <div style={{padding: "100px"}} className="background__yellow">
                        <div className="grid--even_4 background__yellow">
                            <div className="center" style={{height: "50vh", margin:"1vw"}}>
                                <h1 className="center" style={{fontSize: "30px", fontFamily:"happy-times-NG_bold_master_web"}}>MODEL1: <br/> SENSE & SENSIBILITY</h1>
                                <div>
                                    <p className="justify text" style={{fontFamily: "happy-times-NG_regular_master_web", padding: "4px"}}>
                                        how do we adapt – not as an individual institution – but as a community of individuals.
                                        The museum reimagined; as an interface that engages in a mutual relationship –
                                        one based on forms of coexistence, moving beyond the mere display.
                                        A model for an institution that is performative first, representational second.
                                    </p>
                                    <line></line>
                                    <div className="grid--7_3">
                                        <Link to={"../model1"} replace>
                                            <p className="justify text" style=
                                            {{
                                                fontFamily: "happy-times-NG_bold_master_web",
                                                padding: "4px", borderBottom: "2px var(--main__green) solid",
                                                borderTop: "2px var(--main__green) solid"}}>
                                            On the Logic of Collecting and Sovereignty towards a Collection of Care.
                                            </p>
                                        </Link>
                                        <p className="center text" style={{fontFamily: "happy-times-NG_bold_master_web", padding: "4px", borderBottom: "2px var(--main__green) solid", borderTop: "2px var(--main__green) solid"}} >ESSAY, INTERFACE</p>
                                    </div>
                                </div>

                            </div>
                            <div className="center border_box" style={{height: "50vh", margin:"1vw"}}>
                                <h1 className="center" style={{fontSize: "30px", fontFamily:"happy-times-NG_bold_master_web"}}>MODEL2</h1>`
                                <div id="PLCH" style={{height: "40vh"}}>
                                    <Suspense>
                                        <SketchPlaceHolder/>
                                    </Suspense>
                                </div>
                            </div>
                            <div className="center border_box" style={{height: "50vh", margin:"1vw"}}>
                                <h1 className="center" style={{fontSize: "30px", fontFamily:"happy-times-NG_bold_master_web"}}>MODEL3</h1>`
                                <div id="PLCH" style={{height: "40vh"}}>
                                    <Suspense>
                                        <SketchPlaceHolder/>
                                    </Suspense>
                                </div>
                            </div>
                            <div className="center border_box" style={{height: "50vh", margin:"1vw"}}>
                                <h1 className="center" style={{fontSize: "30px", fontFamily:"happy-times-NG_bold_master_web"}}>MODEL4</h1>`
                                <div id="PLCH" style={{height: "50vh", zIndex: "-100000"}}>
                                    <Suspense>
                                        <SketchPlaceHolder/>
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid--7_3" style={{height: "50vh", margin:"1vw", padding:"100px"}}>
                        <div className="center border_box" style={{height: "20vh", margin:"1vw"}}/>
                        <h1 className="center" style={{fontSize: "30px", fontFamily:"happy-times-NG_bold_master_web"}}>INSTRUMENTS + TOOLS</h1>
                        {/*link to glossary*/}
                    </div>

                </div>
                
            </div>
            <br/><br/>
        </div>
    )
}

export default Home;

