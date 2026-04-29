import React, { useMemo, useState } from 'react';
import { ArrowRight, Bookmark, CheckCircle2, Clock, Heart, Search } from 'lucide-react';

const CandidateDashboard = () => {
  const [search, setsearch] = useState('');

  const stats = [
    { title: 'Applications', value: 7, icon: <Bookmark size={24} />, bg: 'bg-blue-100', color: 'text-blue-600' },
    { title: 'Interviews', value: 3, icon: <Clock size={24} />, bg: 'bg-green-100', color: 'text-green-600' },
    { title: 'Offers', value: 1, icon: <CheckCircle2 size={24} />, bg: 'bg-purple-100', color: 'text-purple-600' },
    { title: 'Match Rate', value: '88%', icon: <Heart size={24} />, bg: 'bg-pink-100', color: 'text-pink-600' },
  ];

  const applications = useMemo(
    () => [
      { id: 1, title: 'Frontend Developer', company: 'Pulse Labs', status: 'Under Review', submitted: 'Apr 1, 2026' },
      { id: 2, title: 'Data Analyst', company: 'BrightMetric', status: 'Interview Scheduled', submitted: 'Mar 28, 2026' },
      { id: 3, title: 'Mobile App Engineer', company: 'Nova Apps', status: 'New', submitted: 'Apr 5, 2026' },
      { id: 4, title: 'AI Research Associate', company: 'Vertex AI', status: 'Offer', submitted: 'Mar 18, 2026' },
    ],
    [],
  );

  const filteredApplications = applications.filter((item) =>
    [item.title, item.company, item.status]
    .join(' ').toLowerCase()
    .includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 rounded-3xl bg-white shadow-xl p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-xl uppercase tracking-[0.3em] text-blue-600 font-bold underline"> 
                Candidate Portal </p>
              <h1 className="mt-4 text-4xl font-bold text-slate-900"> Your Career Dashboard </h1>
              <p className="mt-4 text-slate-600 max-w-2xl leading-7">
                Stay on top of your active applications, upcoming interviews, and recruiter feedback with a 
                clean candidate experience.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-500"> Profile strength </p>
              <p className="mt-3 text-3xl font-bold text-slate-900"> 92% </p>
              <p className="mt-2 text-slate-600">Your resume is optimized for recommended roles.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-4 mb-8">
          {
            stats.map((stat) => (
              <div key={stat.title} className="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
                <div className={`inline-flex items-center justify-center rounded-2xl p-4 ${stat.bg} ${stat.color}`}>
                  {stat.icon}
                </div>
                <p className="mt-5 text-sm text-slate-500"> {stat.title} </p>
                <p className="mt-3 text-3xl font-bold text-slate-900"> {stat.value} </p>
              </div>
            ))
          }
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900"> Your applications </h2>
              <p className="mt-2 text-slate-500"> A quick view of your current job pipeline. </p>
            </div>
            <div className="relative w-full sm:w-80">
              <input value={search} onChange={(e) => setsearch(e.target.value)}
                placeholder="Search applications" className="w-full rounded-2xl border border-slate-200
                bg-slate-50 py-3 pl-4 pr-12 text-sm text-slate-900 outline-none focus:border-blue-500 
                focus:ring-2 focus:ring-blue-100" />

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Search size={18} />
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {
              filteredApplications.map((application) => (
                <div key={application.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5
                shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-slate-900"> {application.title} </p>
                      <p className="mt-1 text-sm text-slate-500"> {application.company} </p>
                      <p className="mt-2 text-sm text-slate-500">Submitted {application.submitted} </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold 
                      ${
                        application.status === 'Offer'
                          ? 'bg-green-100 text-green-700'
                          : application.status === 'Interview Scheduled'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {application.status}
                      </span>
                      <button className="inline-flex items-center gap-2 rounded-3xl bg-slate-900 px-4 py-2 text-sm 
                        font-semibold text-white hover:bg-slate-800">
                        Track progress <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mt-8">
          <div className="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900"> Profile summary </h3>
            <p className="mt-3 text-slate-600">Improve your visibility and discover more recruiter matches 
              based on your skills and experience.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500"> Skills matched </p>
                <p className="mt-2 text-2xl font-bold text-slate-900">14</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500"> Companies viewing </p>
                <p className="mt-2 text-2xl font-bold text-slate-900">6</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900"> Recommended next steps </h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 text-green-600" />
                <span> Update your resume with the latest certification details. </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 text-green-600" />
                <span> Upload a portfolio or work samples for designers and engineers. </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 text-green-600" />
                <span> Create a custom cover letter for your top application. </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;