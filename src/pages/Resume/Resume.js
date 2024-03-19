import * as React from 'react';
import './Resume.css'
import Welcome from '../../components/Welcome/Welcome';
import DomainsCard from '../../components/Domains/Domains';
import TechnologyCard from '../../components/Technology/Technology';

const Resume = () => {

    return (
        <div className='Resume-container'>
            <div className='Resume-column-left'>
                <div className='Column-left-card'>
                    <Welcome/>
                </div>
                
                <div className='Column-left-cards-container'>
                    <div className='Column-left-card Column-left-card-domains'>
                        <DomainsCard />
                    </div>
                    
                    <div className='Column-left-card Column-left-card-technology'>
                        <TechnologyCard />
                    </div>
                </div>
            </div>
            <div className='Resume-column-right'>
                Right column
            </div>
        </div>
    )
}

export default Resume;