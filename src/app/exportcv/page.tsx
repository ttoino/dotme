"use client";

import Link from "next/link";
import { useMemo, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Roles, columns } from "./columns";
import { DataTable } from "./data-table";
import { getRolesFormattedData } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { buildSelectedData } from "@/lib/utils";
import build from "next/dist/build";
import { useState } from "react";
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
  const rawParams = useSearchParams();
  const user_data = useMemo(() => {
    try {
      return JSON.parse(rawParams.get("user_data")!) || {};
    } catch {
      return {};
    }
  }, [rawParams]);
  const roles_data = getRolesFormattedData(user_data);
  const [cvData, setCvData] = useState<CV>(user_data);
  const [includeURL, setIncludeURL] = useState(false);
  const [includeQR, setIncludeQR] = useState(false);
  const [template, setTemplate] = useState("default");

  const handleSelectedRowsChange = useCallback(
    (selectedRows: any) => {
      const data = buildSelectedData(
        user_data.portfolio,
        selectedRows,
        template.split("-")[0],
        template.split("-")[1],
        includeURL,
        includeQR
      );
      setCvData(data);
    },
    [user_data]
  );

  useEffect(() => {
    const data = buildSelectedData(
      user_data.portfolio,
      roles_data,
      template.split("-")[0],
      template.split("-")[1],
      includeURL,
      includeQR
    );
    setCvData(data);
  }, [includeQR, includeURL, template]);

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
          ></Switch>
          <Label htmlFor="include-url">Include profile link</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="include-qr"
            checked={includeQR}
            onCheckedChange={setIncludeQR}
          ></Switch>
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
            <SelectItem value="design">
              Design Template by Mike Pound
            </SelectItem>
            <SelectItem value="tech">
              Tech Job CV Template by Jane Doe
            </SelectItem>
            <SelectItem value="light_cv_template">
              Light CV Template - Essentials Collections
            </SelectItem>
          </SelectContent>
        </Select>

        <DataTable
          columns={columns}
          data={roles_data}
          onSelectedRowsChange={handleSelectedRowsChange}
        />

        <div className="flex items-center justify-between w-full max-w-2xl mt-4">
          <Button
            variant="outline"
            className="w-full mr-2"
            onClick={() => download_cv(cvData)}
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
