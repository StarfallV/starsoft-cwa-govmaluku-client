import React from 'react'
import Clock from './clock'

function Footer() { 

    return (
        <footer className="flex h-24 w-full items-center border-t">
            <div className="flex items items-center mx-20 justify-between w-full">
                <div className="inset-y-0 left-0 w-1/2">
                    <p>
                        © 2022 Starsoft Studio | Pemerintah Provinsi Maluku. All Rights Reserved.
                    </p>
                </div>
                <div className="inset-y-0 right-0 w-1/2">
                    <p className="text-end">
                    <Clock/>
                    </p>     
                </div>
            </div>
        </footer>
    )
}

export default Footer