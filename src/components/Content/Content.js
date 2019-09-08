import React, { Component } from 'react'
import './Content.css';

export class Content extends Component {

    state={
        home: true,
        technologiesTMBTS2000: false,
        technologiesTMBTS2018: false,
        solutionsList: false,
        solutionsWater: false,
        solutionsSewage: false,
        solutionsWaste: false,
        solutionsEnergyAndTransport: false,
        solutionsAgroTech: false,
        solutionsEnvironmental: false
    };


    render() {
        return (
            <div className="container">
            <div className="home_EN"
            value={this.state.home}>
<h1>Home</h1>
<p>
The main activity of EDYS Lab is the development of innovative solutions related to solving the problems of irrational management of water, raw materials and energy resources, anthropogenic impact on the biosphere, as well as the sustainability of life support systems to the effects of technological disasters and natural disasters. This was made possible thanks to many years of research and experiments based on an alternative environmental concept and the idea of ​​unlimited operation of secondary resources with zero waste emissions into the environment.

A feature of this project is the development and optimization of processes on equipment with advanced functionality, which provides the possibility of their integration in related industries. The central development here is a unified process for recycling and / or total disposal of heterogeneous waste. The implementation of this technology will allow efficiently and at minimal cost to solve such urgent problems as reducing the level of intoxication of the biosphere by xenobiotics, desalination of sea water at any scale and the generation of "clean" electricity on demand.

EDYS Lab offers non-standard solutions related to the development of engineering cybersystems, with alternative hydropower, with transport on electric reactive traction, with inter-sectoral agro-industrial cultivation of aquatic crops and with environmental measures, which include: 
complete treatment of solid, liquid and gaseous wastes in processing complexes with unlimited performance decentralized and energy-independent water treatment and water supply systems, including low pressure mains pipelines;
new generation power plants integrated into autonomous life support systems, in desalination systems of sea water and as propulsion systems for jet propulsion in transport;
cultivation of aquatic vegetation according to a vertical pattern - in multi-tiered water greenhouses integrated into the water treatment and purification systems of sewer and drainage drains;
environmental measures related to the rehabilitation of marine and freshwater areas, the protection of hydrobionts at water intake facilities and the reduction of flue gas emissions into the atmosphere.
</p> </div>

<br></br>


<div className="technologiesTMBTS2000_EN"
    value={this.state.technologiesTMBTS2000}
>

<h1>MBTS Technology ver.1</h1>

<p>The BFR technology was developed in 2000 on the basis of a fundamentally new concept of integrated treatment and disposal of waste to be transported for treatment as part of wastewater - with the goal of implementing waste-free and cyclical use of water, raw materials and energy resources and, accordingly, reducing environmental pollution.

To accomplish these tasks, the following methods and techniques have been included in the structure of MBTS Technology:

differentiated filtering of substrates - as an alternative to traditional settling tanks and sludge compactors;
Stage biosorption of substrates in closed systems that regulate environmental parameters and increase the productivity of microbiocenoses, in accordance with their life cycle - with the prevention of the infiltration of biogenic pollution into the environment;
effective methods of aeration (purging) wastewater, providing the necessary concentration of oxygen in the system with minimal air flow;
differentiated treatment (regeneration and cultivation) of activated sludge, allowing them to be used for different purposes;
"tertiary" water treatment on multi-tiered water greenhouses, implemented either at the final stage of wastewater clarification, or for pre-treatment of water from freshwater sources in water supply systems;
high-speed utilization (mineralization) of mineral and organic sludges by freezing on freezing installations - drum-type ice generators;
multi-level protection of processes and equipment from the influence of adverse factors and the implementation of alternative energy sources.

In the process of developing the MBOS Technology and equipment, a number of tasks were solved related to:

the treatment of aqueous complexes by highly efficient methods for the separation of dissimilar impurities from it;
decrease in material consumption of equipment and increase its reliability;
the possibility of introducing advanced controls, management and "intelligent" software to ensure full automation of processes;
implementation of a multi-level system for protecting equipment and processes from adverse factors, including peak loads and natural disasters;
the complex problem of transportation and disposal of waste, gases and thermal discharges;
alternative waste disposal options;
minimizing operating costs by optimizing heat transfer processes.</p>

</div>

</div>


        );
    }
}

export default Content
