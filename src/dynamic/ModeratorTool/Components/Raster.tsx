import paper from "paper/dist/paper-core";
function handler() {
  const e: paper.Raster = this;
  e.fitBounds(paper.view.bounds, false);
}
export const makeRaster = (file):Promise<paper.Raster> => {
  const url = file.preview;
  const raster = new paper.Raster(url);
  
  return new Promise((resolve,reject)=>{
    raster.onLoad = ()=>{
      raster.fitBounds(paper.view.bounds, false);
      resolve(raster)
    };
  })
  
};
