"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon, Users, Tent } from "lucide-react";
import { useState } from "react";

export function BookingForm() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  return (
    <div className="absolute left-0 right-0 -bottom-14 bg-white p-4 shadow-lg w-3/4 mx-auto rounded-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Check In */}
          <div className="space-y-1">
            <label className="text-sm font-medium flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              CHECK IN
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  {checkIn
                    ? format(checkIn, "EEE, dd MMM yyyy")
                    : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check Out */}
          <div className="space-y-1">
            <label className="text-sm font-medium flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              CHECK OUT
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  {checkOut
                    ? format(checkOut, "EEE, dd MMM yyyy")
                    : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="space-y-1">
            <label className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              GUESTS
            </label>
            <Select defaultValue="1">
              <SelectTrigger>
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Adult</SelectItem>
                <SelectItem value="2">2 Adults</SelectItem>
                <SelectItem value="3">3 Adults</SelectItem>
                <SelectItem value="4">4 Adults</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Accommodation */}
          <div className="space-y-1">
            <label className="text-sm font-medium flex items-center gap-2">
              <Tent className="h-4 w-4" />
              ACCOMMODATION
            </label>
            <Select defaultValue="tent">
              <SelectTrigger>
                <SelectValue placeholder="Select accommodation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tent">Tent</SelectItem>
                <SelectItem value="cabin">Cabin</SelectItem>
                <SelectItem value="rv">RV Spot</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Book Now Button */}
          <div className="flex items-end">
            <Button
              className="w-full bg-green-700 hover:bg-green-800 text-white"
              size="lg"
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
