import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, cn } from "@nextui-org/react";
import { api } from '~/utils/api'
export default function Changefund({ typeId, type, percent, riskLevel }: { typeId: string, type: string, percent: string, riskLevel: number }) {
  const { data: _riskLevel } = api.portfolio.getAllRiskLevel.useQuery();
  const { data: Ratio } = api.portfolio.getAllRatio.useQuery();
  const { data: MutualFund } = api.portfolio.getAllMutualFund.useQuery();
  const { data: FundType } = api.portfolio.getAllFundType.useQuery();

  const riskLevelId = _riskLevel?.find((item: any) => item.level == riskLevel)?.id

  const fundWithTypeId = MutualFund
  console.log(fundWithTypeId)
  return (
    <Dropdown >
      <DropdownTrigger>
        <Button> {type}</Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownSection title="Mutual Fund" showDivider>
          {(Ratio?.filter((item: any) => item.riskLevelId === riskLevelId) || []).map((item: any) => (
            <DropdownItem key={item.id}>
              <p className="text-lg">
                {fundWithTypeId?.find((item2: any) => item2.id === item.mutualFundId)?.name} {item.percentage}%
              </p>
            </DropdownItem>
          ))}
        </DropdownSection>

      </DropdownMenu>
    </Dropdown>
  )
}
