"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";

export function SearchFilters() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const regions = ["関東", "関西", "九州", "北海道", "東北"];
  const positions = ["GK", "DF", "MF", "FW"];

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-4">
        <div className="mb-2 text-left text-sm font-medium text-gray-700">
          Region
        </div>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <Button
              key={region}
              variant={selectedRegion === region ? "default" : "outline"}
              className="h-9"
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <div className="mb-2 text-left text-sm font-medium text-gray-700">
            Level
          </div>
          <div className="flex gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="enjoy" />
              <Label htmlFor="enjoy">エンジョイ</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="competitive" />
              <Label htmlFor="competitive">ガチ</Label>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-2 text-left text-sm font-medium text-gray-700">
            Position
          </div>
          <div className="flex flex-wrap gap-3">
            {positions.map((position) => (
              <div key={position} className="flex items-center space-x-2">
                <Checkbox id={position} />
                <Label htmlFor={position}>{position}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input placeholder="チーム名、場所などで検索" className="pl-10" />
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button className="flex-1">チーム検索</Button>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex-1">
              詳細検索
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>詳細検索</DialogTitle>
            </DialogHeader>
            s
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="age" className="text-right">
                  年齢範囲
                </Label>
                <div className="col-span-3 flex items-center gap-2">
                  <Input id="age-min" placeholder="最小" className="w-20" />
                  <span>-</span>
                  <Input id="age-max" placeholder="最大" className="w-20" />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="practice-day" className="text-right">
                  練習日
                </Label>
                <div className="col-span-3">
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    <option value="">全て</option>
                    <option value="weekday">平日</option>
                    <option value="weekend">休日</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="team-size" className="text-right">
                  チーム人数
                </Label>
                <div className="col-span-3">
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    <option value="">全て</option>
                    <option value="small">小規模 (5-10)</option>
                    <option value="medium">中規模 (11-15)</option>
                    <option value="large">大規模 (16+)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setOpenDialog(false)}>条件を適用</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
