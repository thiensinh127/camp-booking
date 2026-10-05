"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { format } from "date-fns";
import { CalendarIcon, Search, Tent, Users, X } from "lucide-react";
import { useState } from "react";

export function BookingForm() {
  const { t } = useLanguage(); const [open, setOpen] = useState(false); const [checkIn, setCheckIn] = useState<Date>(); const [checkOut, setCheckOut] = useState<Date>();
  const fields = <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:gap-0"><Date label={t.checkIn} date={checkIn} setDate={setCheckIn} /><Date label={t.checkOut} date={checkOut} setDate={setCheckOut} /><Field icon={<Users />} label={t.guests}><Select defaultValue="1"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="1">1 {t.guests.toLowerCase()}</SelectItem><SelectItem value="2">2 {t.guests.toLowerCase()}</SelectItem></SelectContent></Select></Field><Field icon={<Tent />} label={t.stayType}><Select defaultValue="tent"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="tent">Lều trại</SelectItem><SelectItem value="glamping">Glamping</SelectItem><SelectItem value="cabin">Cabin</SelectItem></SelectContent></Select></Field><Button className="h-12 bg-[var(--forest)] text-white"><Search /> {t.filter}</Button></div>;
  return <div id="booking" className="absolute inset-x-0 bottom-0 z-20 translate-y-1/2 px-4 md:px-6"><div className="mx-auto max-w-[1200px] rounded-2xl bg-white p-4 shadow-xl"><button onClick={()=>setOpen(true)} className="flex h-12 w-full items-center justify-between rounded-xl border px-4 text-left lg:hidden"><span>{t.summary}</span><Search className="size-4" /></button><div className="hidden lg:block">{fields}</div></div>{open && <div className="fixed inset-0 z-[70] bg-black/40 p-4 lg:hidden"><div className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-white p-5"><div className="mb-5 flex justify-between"><b>{t.filter}</b><button onClick={()=>setOpen(false)}><X /></button></div>{fields}</div></div>}</div>;
}
function Field({icon,label,children}:{icon:React.ReactNode;label:string;children:React.ReactNode}){return <div className="rounded-xl border p-3 lg:border-0"><p className="mb-1 flex gap-2 text-xs text-[var(--text-secondary)]">{icon}{label}</p>{children}</div>}
function Date({label,date,setDate}:{label:string;date?:Date;setDate:(d?:Date)=>void}){return <Field icon={<CalendarIcon />} label={label}><Popover><PopoverTrigger asChild><Button variant="ghost" className="w-full justify-start p-0">{date?format(date,"dd/MM/yyyy"):"Chọn ngày"}</Button></PopoverTrigger><PopoverContent><Calendar mode="single" selected={date} onSelect={setDate}/></PopoverContent></Popover></Field>}
