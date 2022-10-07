import {  LightningElement} from 'lwc';
import sendRequest from '@salesforce/apex/B2bfedxAuthTracking.sendRequest';
export default class B2bFedxFetchingDetails extends LightningElement 
{   
    ProgressBar = false;
    trackno;
    tno;
    errors;
        
        handleClick(event)
        {
            this.ProgressBar = true;
            console.log(event.target.label);
            var inp=this.template.querySelector("lightning-input");
            this.trackno=inp.value;
            console.log('trackno-->'+this.trackno);          
            this.fetchTrackingNo();      
        }    
        fetchTrackingNo(){
            //console.log('In fetch info');
            let fetchTrack={};
            fetchTrack.trackingNum = this.trackno;
            sendRequest({'trackingno':this.fetchTrack})
            .then(result=>{
                this.tno= result; 
                console.log('result==>'+ this.tno);         
            })
            .catch(error => {
                this.errors = error;
            });

        }
}
    
        
        
























        
        // connectedCallback()
        // {
        //     sendRequest({}).then((response) => 
        //     {
        //         console.log("Response : " + (response));
        //             if (!!response)
        //               {
        //                 let res = JSON.parse(response);
        //                 this.trackingId = res.output.completeTrackResults[1].trackingNumber;
        //                 let list = [];
        //                 list = res.output.completeTrackResults[0];
        //                 console.log('list Resp--->'+ JSON.stringify(list));                      
        //               }
        //     });        
        // }         
//}