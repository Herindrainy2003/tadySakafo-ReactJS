import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = { 
  registerType : 'prompt' , 
  includeAssests:[ 'favicon.ico' , "apple-touc-icon.png" , "masked-icon.svg" ], 
  manifest:{ 
    nom : "Tady Sakafo" , 
    nom_court : "TS" , 
    description : "Une appliacation pour faire les recherhces des Ingredients" , 
    icônes :[{ 
      src : '/Tady.png' , 
      tailles : '192x192' , 
      tapez : 'image/ png' , 
      objectif : 'favicon'
     }, 
    { 
      src : '/Tady.png' , 
      tailles : '512x512' , 
      type : 'image/png' , 
      objectif : 'favicon'
     }, 
    { 
      src : '/ apple-touch-icon.png' , 
      tailles : '180x180' , 
      tapez : 'image/png' , 
      objectif : 'apple touch icon' , 
    }, 
    { 
      src : '/Tady.png' , 
      tailles : '512x512' , 
      tapez : 'image/png' , 
      objectif : 'tout masquable' , 
    } 
  ], 
  theme_color : '#171717' , 
  background_color : '#f0e7db' , 
  affichage : "autonome" , 
  portée : '/' , 
  start_url : "/" , 
  orientation : 'portrait'
   } 
}

export default defineConfig({ 
  plugins : [react(), VitePWA(manifestForPlugIn)], 
})