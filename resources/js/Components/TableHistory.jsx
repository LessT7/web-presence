import React from 'react'
import { Link } from "@inertiajs/react"
import PrimaryButton from './PrimaryButton'
import { TbReload } from 'react-icons/tb'
import Sorting from './Sorting'
import Paginator from './Paginator'
export default function TableHistory({ attendances }) {
    const presences = attendances.data
    // console.log(attendances)
    // console.log(presences)
    return (
        <>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg divide-y divide-gray-200">
                            <div className="py-3 px-4 flex justify-between items-center gap-2">
                                <Link href="/dashboard/riwayat">
                                    <PrimaryButton className="text-xl">
                                        <TbReload />
                                    </PrimaryButton>
                                </Link>
                                <form action="/dashboard/riwayat" className="relative w-full" method="get">
                                    <label className="sr-only">Search</label>
                                    <input type="text" name="search" id="search" className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Pencarian" />
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                        <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                    </div>
                                </form>
                                <Sorting />
                            </div>
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr className="[&>*]:text-left">
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">NO</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">NIK</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">NAME</th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Tanggal</th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Waktu</th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Presensi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 ">
                                        {presences.map((presence, index) => {
                                            const formattedDate = new Date(presence.date).toLocaleDateString('en-GB');

                                            return (
                                                <tr key={index} className="[&>*]:text-left">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index + 1}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{presence.user_nik.nik}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{presence.user_nik.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{formattedDate}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{presence.time}</td>
                                                    {
                                                        presence.presensi === "Datang" ?
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500 font-bold">{presence.presensi}</td> :
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500 font-bold">{presence.presensi}</td>
                                                    }
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="py-4 px-4 flex justify-start">
                                <Paginator users={attendances} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
