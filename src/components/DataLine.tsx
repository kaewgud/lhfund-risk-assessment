
export const DataLine = (dataJS: {
    Fundcode: string;
    "NAV PerUnit": number;
    "Total NAV": number;
    Subscription: number;
    Redemption: number;
    Change: number;
    Date: string;
}[],
index:number)=>{
    const labelX = dataJS.map((data) => {
        const parts = data.Date.split('/');
        const dateObject = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
        return dateObject
    
    })
    const dash = (ctx:any ,value:number[])=>ctx.p0DataIndex>index ? value:[120,0];
    const lineChartData = {
        labels:labelX
        ,
        datasets: [
            {
                label:"Nav per Unit",
                data: dataJS.map((data) => data["NAV PerUnit"]),
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
                segment:{
                    borderDash:(ctx:any)=>dash(ctx,[4,2])||[120,0]
                },
                pointRadius: (ctx: any) => {
                    const pointlen = ctx.chart.data.labels.length - 1;
                    const pointArray = [];
                    for (let i = 0; i <= pointlen; i++) {
                        if (i === pointlen) {
                            pointArray.push(7)
                        } else {
                            pointArray.push(0)
                        }
                    }
                    return pointArray;
                },
                pointHoverRadius: 10
            },
        ],
    
    };
    return lineChartData;
}
