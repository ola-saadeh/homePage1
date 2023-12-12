import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <>
    <div className={style.oka}>
        <footer class="py-4">
        <div class={style.container}>
            <div class="row text-secondary text-center">
                <div class="col-md-4 F1">
                    <p>&copy; All Rights Reserved.</p>
                </div>
                <div class="col-md-4 mb-4 mb-md-0 F0">
                    <img src="images/pci-logo1.png" alt="logo" class={`${style.myimg} h-100 `}/>
                </div>
                <div class="col-md-4 F2">
                    <p>Made By <span>AN-Najah</span></p>
                </div>
            </div>
        </div>
    </footer>
    </div>
    </>
  )
}
