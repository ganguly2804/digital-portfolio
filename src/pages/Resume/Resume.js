import * as React from 'react';
import './Resume.css'
import IntroductionCard from '../../features/Introduction/Introduction';
import SkillsCard from '../../features/Skills/Skills';
import ExperienceCard from '../../features/Experience/Experience';

const Resume = () => {

    return (
        <div className='Resume-container'>
            <div className='Resume-column-left'>
                <div className='Resume-card'>
                    <IntroductionCard />
                </div>
                
                <div className='Resume-card'>
                    {/* <AchievementsCard /> */}
                </div>
                
                <div className='Resume-card'>
                    <ExperienceCard />
                </div>
            </div>
            <div className='Resume-column-right'>
                <SkillsCard />
            </div>
        </div>
    )
}

export default Resume;