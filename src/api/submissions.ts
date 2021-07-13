import { ms_main } from './../index';
export const listSubmissions = async () => {
    const data = await ms_main.get(`/list-submissions`,{params:{
      page_size:50
    }});
    return data
  }

export const updateSubmission = async (taskId,dataId,status)=>{
  const data = await ms_main.patch(`/${dataId}/${taskId}`,{
    status
  })
  
  return data
}