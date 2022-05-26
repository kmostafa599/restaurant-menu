import React from 'react';

const Logo = () => {
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-col justify-center items-center match-content w-full h-auto'>
                <div className='w-[100px] h-[100px] '>
                    <img src="https://i.etsystatic.com/20646407/r/il/4d331f/1985567355/il_fullxfull.1985567355_85xe.jpg" alt="logo" />
                    
                </div>
                <div className='w-7/12  border broder-indigo-500    rounded   '></div>

                <div className='flex justify-center w-full  '>
                        Restaurant Name
                </div>
            </div>

        </div>
    );
}

export default Logo;
