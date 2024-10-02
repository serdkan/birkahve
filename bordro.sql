select  
DISTINCT(TMD.EmployeeRegistryId)as EmployeeRegisterId,
E.fullName,
E.fullName2,
ER.dutyNameTR as Gorev,
ER.wage as Ucret,
eR.wageTypeId AS UcretTipi,
MW.TotalDays as AylikCalismaGunleri,
(select SUM(debit) from ERPV_AccountingTransactions where workplaceId=100 and accountingPlanCode=ER.accountingPlanCode and type=7 and YEAR(period)=2024 and MONTH(period)=09)as Avans,
(select SUM(debit) from ERPV_AccountingTransactions where  workplaceId=100 and accountingPlanCode=ER.accountingPlanCode and type=8 and YEAR(period)=2024 and MONTH(period)=09)as Kesinti,
(select SUM(credit) from ERPV_AccountingTransactions where  workplaceId=100 and accountingPlanCode=ER.accountingPlanCode and type=9 and YEAR(period)=2024 and MONTH(period)=09)as EkOdeme,
(ER.wage -
(select SUM(debit) from ERPV_AccountingTransactions where workplaceId=100 and accountingPlanCode=ER.accountingPlanCode and type=7 and YEAR(period)=2024 and MONTH(period)=09)-
(select SUM(debit) from ERPV_AccountingTransactions where  workplaceId=100 and accountingPlanCode=ER.accountingPlanCode and type=8 and YEAR(period)=2024 and MONTH(period)=09)+
(select SUM(credit) from ERPV_AccountingTransactions where  workplaceId=100 and accountingPlanCode=ER.accountingPlanCode and type=9 and YEAR(period)=2024 and MONTH(period)=09)
)as NetÜcret,
ER.accountingPlanCode,
(select SUM(RegularHours) from HRM_TimeSheetDetail where YEAR(Date)=2024 and MONTH(Date)=09 and TM.WorkPlaceId=100 and TMD.EmployeeRegistryId=EmployeeRegistryId)as TotalNm,
(select SUM(OvertimeHours) from HRM_TimeSheetDetail where YEAR(Date)=2024 and MONTH(Date)=09 and TM.WorkPlaceId=100 and TMD.EmployeeRegistryId=EmployeeRegistryId)as TotalFm,
DP.OvertimeHoursCoefficient as FmKatsayisi,
CASE WHEN ER.wageTypeId = 2 THEN 
((select SUM(RegularHours) from HRM_TimeSheetDetail where YEAR(Date)=2024 and MONTH(Date)=09 and TM.WorkPlaceId=100 and TMD.EmployeeRegistryId=EmployeeRegistryId) * ER.wage)+
((select SUM(OvertimeHours) from HRM_TimeSheetDetail where YEAR(Date)=2024 and MONTH(Date)=09 and TM.WorkPlaceId=100 and TMD.EmployeeRegistryId=EmployeeRegistryId) * ER.wage * DP.OvertimeHoursCoefficient)
ELSE
1
END AS Ucret

from HRM_TimeSheet TM
LEFT JOIN HRM_TimeSheetDetail TMD on TM.Id=TMD.TimeSheetId
LEFT JOIN HRMV_EmployeeRegistry ER on TMD.EmployeeRegistryId=ER.id
LEFT JOIN HRMV_Employee E on ER.employeeId=E.Id
LEFT JOIN HRM_MonthlyWorkingDays MW on ER.departmentId=MW.DepartmentId and MW.Year=2024 and Mw.Month=09
LEFT JOIN HRM_DepartmentParameter DP ON DP.DepartmentId=ER.departmentId and ER.workPlaceId=DP.WorkPlaceId
where YEAR(Date)=2024 and MONTH(Date)=09 and TM.WorkPlaceId=100
