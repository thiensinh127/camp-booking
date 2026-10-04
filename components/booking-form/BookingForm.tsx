"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon, Search, Tent, Users } from "lucide-react";
import { useState } from "react";

export function BookingForm() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const fieldClass = "h-12 border-0 bg-transparent px-0 text-sm font-semibold shadow-none hover:bg-transparent focus:ring-0";
  return <div id="booking" className="absolute inset-x-0 bottom-0 z-20 translate-y-1/2 px-4 md:px-6 xl:px-8"><div className="mx-auto max-w-[1200px] rounded-2xl border border-[var(--line)] bg-white p-4 shadow-[0_20px_60px_rgba(18,37,28,.16)] md:p-5"><div className="grid gap-2 md:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:gap-0">
    <DateField label="Check in" date={checkIn} onSelect={setCheckIn} className="lg:border-r" fieldClass={fieldClass} /><DateField label="Check out" date={checkOut} onSelect={setCheckOut} className="lg:border-r" fieldClass={fieldClass} />
    <div className="min-w-0 rounded-xl px-3 py-2 lg:rounded-none lg:border-r"><p className="flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)]"><Users className="size-3.5" /> Guests</p><Select defaultValue="2"><SelectTrigger className={fieldClass}><SelectValue /></SelectTrigger><SelectContent><SelectItem value="1">1 guest</SelectItem><SelectItem value="2">2 guests</SelectItem><SelectItem value="3">3 guests</SelectItem><SelectItem value="4">4 guests</SelectItem></SelectContent></Select></div>
    <div className="min-w-0 rounded-xl px-3 py-2 lg:rounded-none"><p className="flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)]"><Tent className="size-3.5" /> Stay type</p><Select defaultValue="glamping"><SelectTrigger className={fieldClass}><SelectValue /></SelectTrigger><SelectContent><SelectItem value="glamping">Glamping</SelectItem><SelectItem value="cabin">Cabin</SelectItem><SelectItem value="tent">Tent site</SelectItem><SelectItem value="rv">RV site</SelectItem></SelectContent></Select></div>
    <Button className="h-12 self-center rounded-xl bg-[var(--forest)] px-5 text-white hover:bg-[var(--forest-hover)]"><Search /> Search stays</Button>
  </div></div></div>;
}

function DateField({ label, date, onSelect, className, fieldClass }: { label: string; date?: Date; onSelect: (date?: Date) => void; className: string; fieldClass: string }) {
  return <div className={`min-w-0 rounded-xl px-3 py-2 lg:rounded-none ${className}`}><p className="flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)]"><CalendarIcon className="size-3.5" /> {label}</p><Popover><PopoverTrigger asChild><Button variant="outline" className={`w-full justify-start ${fieldClass}`}>{date ? format(date, "EEE, dd MMM") : "Select date"}</Button></PopoverTrigger><PopoverContent className="w-auto p-0"><Calendar mode="single" selected={date} onSelect={onSelect} initialFocus /></PopoverContent></Popover></div>;
}
