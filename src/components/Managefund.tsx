import React from "react";
import { Card, CardBody, Divider } from "@nextui-org/react";
import Changefund from "./changefund";
import Addmutalpopup from "./Addmutalpopup";
import { api } from '~/utils/api'


export default function Managefund({ riskLevel }: { riskLevel: number }) {
  const { data: MutualFund } = api.portfolio.getAllMutualFundByRiskLevel.useQuery({ riskLevel: riskLevel });
  const { data: Ratio } = api.portfolio.getAllRatio.useQuery();
  const { data: FundType } = api.portfolio.getAllFundTypeByRiskLevel.useQuery({ riskLevel: riskLevel });

  return (
    <Card className="bg-white mt-5 w-11/12 shadow-2xl">
      <CardBody>
        <div className="flex flex-col w-full gap-3 mb-3">
          {FundType?.map((item: any) => (
            <Changefund typeId={item.id} type={item.name} percent={item.percent} riskLevel={riskLevel} />
          ))}
        </div>
        <Addmutalpopup />
      </CardBody>
    </Card>
  )

}
