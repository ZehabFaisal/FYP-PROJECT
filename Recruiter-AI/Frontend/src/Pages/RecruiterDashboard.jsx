import React, { useMemo, useState } from 'react';
import { Calendar, Briefcase, TrendingUp, Users, Search, Funnel, ArrowRight, MessageSquare, Star } from 'lucide-react';

const RecruiterDashboard = () => {
  const [search, setsearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const stats = [
    { title: 'Total Candidates', value: 42, icon: <Users size={24} />, bg: 'bg-blue-100', color: 'text-blue-600' },
    { title: 'Open Roles', value: 14, icon: <Briefcase size={24} />, bg: 'bg-purple-100', color: 'text-purple-600' },
    { title: 'Interviews', value: 7, icon: <Calendar size={24} />, bg: 'bg-green-100', color: 'text-green-600' },
    { title: 'Match Score', value: '91%', icon: <TrendingUp size={24} />, bg: 'bg-orange-100', color: 'text-orange-600' },
  ];

  const candidates = useMemo(
    () => [
      { id: 1, name: 'Ayesha Malik', role: 'DevOps Engineer', status: 'Interview Scheduled', score: 93, skills: ['AWS', 'Terraform', 'Kubernetes'] },
      { id: 2, name: 'Ahmed Khan', role: 'Frontend Developer', status: 'Under Review', score: 89, skills: ['React', 'TypeScript', 'Tailwind'] },
      { id: 3, name: 'Sara Khan', role: 'Data Analyst', status: 'New', score: 94, skills: ['Python', 'Machine Learning', 'SQL'] },
      { id: 4, name: 'Imran Qureshi', role: 'Full Stack Developer', status: 'Interview Scheduled', score: 90, skills: ['Node.js', 'React', 'MongoDB'] },
      { id: 5, name: 'Maryam Noor', role: 'Cybersecurity Analyst', status: 'Under Review', score: 88, skills: ['Network Security', 'SIEM', 'Python'] },
    ],
    [],
  );

  const filteredCandidates = candidates.filter((c) => {
    const matchesSearch = [c.name, c.role, ...c.skills]
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = filterStatus === 'All' || candidate.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 rounded-3xl bg-white shadow-xl p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-xl uppercase underline tracking-[0.3em] text-blue-600 font-bold">Recruiter Portal</p>
              <h1 className="mt-4 text-4xl font-bold text-slate-900">Manage talent, speed hiring, and visualize outcomes.</h1>
              <p className="mt-4 text-slate-600 max-w-2xl leading-7">
                Monitor candidate flow, review talent matches, and coordinate interviews from a single modern dashboard.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">Active hiring campaign</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">15 roles live</p>
              <p className="mt-2 text-slate-600">14 new candidate matches today</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.title} className="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
              <div className={`inline-flex items-center justify-center rounded-2xl p-4 ${stat.bg} ${stat.color}`}>
                {stat.icon}
              </div>
              <p className="mt-5 text-sm text-slate-500">{stat.title}</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <div className="lg:col-span-2 rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 underline"> Candidate pipeline </h2>
                <p className="text-slate-500 mt-2">Track your most promising applicants and move them through 
                    hiring quickly. </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3 top-3 text-slate-400" />
                  <input value={search} onChange={(e) => setsearch(e.target.value)}
                    placeholder="Search the candidates here...."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm
                     text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-600">Status:</span>
                  <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900
                     outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" >
                    <option> All </option>
                    <option> New </option>
                    <option> Under Review </option>
                    <option> Interview Scheduled </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {filteredCandidates.map((candidate) => (
                <div key={candidate.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm
                 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-slate-900"> {candidate.name} </p>
                      <p className="mt-1 text-sm text-slate-500"> {candidate.role} </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {candidate.skills.map((skill) => (
                          <span key={skill} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                        {candidate.status}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">
                        <Star size={14} /> {candidate.score}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500"> Quick actions </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900"> Recruiter controls </h3>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <Briefcase className="text-purple-600" />
                <div>
                  <p className="text-sm text-slate-500"> New role live </p>
                  <p className="font-semibold text-slate-900"> Senior Product Designer </p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <Calendar className="text-green-600" />
                <div>
                  <p className="text-sm text-slate-500"> Next interview </p>
                  <p className="font-semibold text-slate-900"> Wed, Apr 16 · 11:30 AM </p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <MessageSquare className="text-blue-600" />
                <div>
                  <p className="text-sm text-slate-500"> Messages </p>
                  <p className="font-semibold text-slate-900"> 8 unread replies </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
export default RecruiterDashboard;