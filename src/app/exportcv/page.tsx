"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getRolesFormattedData, buildSelectedData } from "@/lib/utils";
import { CV } from "@/types/cv";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { download_cv } from "./download";

export default function ExportCV() {
  const [userData, setUserData] = useState<any>(null);
  const [rolesData, setRolesData] = useState<any[]>([]);
  const [cvData, setCvData] = useState<CV | null>(null);
  const [includeURL, setIncludeURL] = useState(false);
  const [includeQR, setIncludeQR] = useState(false);
  const [template, setTemplate] = useState("default");
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("user_data");
      if (stored) {
        const parsed = JSON.parse(stored);
        setUserData(parsed);
        setRolesData(getRolesFormattedData(parsed));

        const initialData = buildSelectedData(
          parsed.portfolio,
          getRolesFormattedData(parsed),
          template.split("-")[0],
          template.split("-")[1],
          includeURL,
          includeQR
        );
        setCvData(initialData);
      }
    } catch {
      // Handle JSON parse error
      setUserData({});
    }
  }, []);

  useEffect(() => {
    if (!userData || selectedRows.length === 0) return;
    const updatedData = buildSelectedData(
      userData.portfolio,
      selectedRows,
      template.split("-")[0],
      template.split("-")[1],
      includeURL,
      includeQR
    );
    setCvData(updatedData);
  }, [includeQR, includeURL, template, userData, selectedRows]);
  

  const handleSelectedRowsChange = useCallback(
    (selectedRows: any) => {
      setSelectedRows(selectedRows);
  
      if (!userData) return;
      const data = buildSelectedData(
        userData.portfolio,
        selectedRows,
        template.split("-")[0],
        template.split("-")[1],
        includeURL,
        includeQR
      );
      setCvData(data);
    },
    [userData, includeURL, includeQR, template]
  );

  if (!userData) {
    return <div className="p-8">Loading CV data...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Export CV</h1>
      <p className="text-lg mb-4">Select what you want to see in your CV!</p>

      <div className="flex flex-col items-center space-x-2 gap-5">
        <div className="flex items-center space-x-2">
          <Switch
            id="include-url"
            checked={includeURL}
            onCheckedChange={setIncludeURL}
          />
          <Label htmlFor="include-url">Include profile link</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="include-qr"
            checked={includeQR}
            onCheckedChange={setIncludeQR}
          />
          <Label htmlFor="include-qr">Include profile QR Code</Label>
        </div>

        <Select onValueChange={setTemplate}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="html-00002">
              Pretty CV - Essentials Collection
            </SelectItem>
            <SelectItem value="md-00002">
              Simple CV - Essentials Collection
            </SelectItem>
            <SelectItem value="design">Design Template by Mike Pound</SelectItem>
            <SelectItem value="tech">Tech Job CV Template by Jane Doe</SelectItem>
            <SelectItem value="light_cv_template">
              Light CV Template - Essentials Collections
            </SelectItem>
          </SelectContent>
        </Select>

        <DataTable
          columns={columns}
          data={rolesData}
          onSelectedRowsChange={handleSelectedRowsChange}
        />

        <div className="flex items-center justify-between w-full max-w-2xl mt-4">
          <Button
            variant="outline"
            className="w-full mr-2"
            onClick={async () => await download_cv(cvData)}
          >
            Download CV
          </Button>
        </div>

        <Button variant="outline">
          <Link href="/me">Back to Portfolio</Link>
        </Button>
      </div>
    </div>
  );
}
