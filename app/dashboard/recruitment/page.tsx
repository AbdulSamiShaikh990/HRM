"use client";
import React from "react";

import { useState } from "react";

export default function RecruitmentPage() {
  const badge = (status: string) => (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 12px',
        borderRadius: 12,
        fontWeight: 600,
        fontSize: 13,
        color: status === 'Open' ? '#166534' : '#991b1b',
        background: status === 'Open' ? '#bbf7d0' : '#fee2e2',
        border: status === 'Open' ? '1px solid #22c55e' : '1px solid #ef4444',
        letterSpacing: 0.2,
      }}
    >
      {status}
    </span>
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [jobs, setJobs] = useState([
    { position: "Software Engineer", department: "Engineering", status: "Open" },
    { position: "HR Specialist", department: "Human Resources", status: "Closed" },
  ]);
  const [form, setForm] = useState({ position: "", department: "", status: "Open" });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setJobs(jobs.concat(form));
    setForm({ position: "", department: "", status: "Open" });
    setModalOpen(false);
  };

  return (
    <div style={{ padding: '2.5rem 0', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.8rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 6, letterSpacing: -1 }}>Recruitment</h1>
          <p style={{ color: '#64748b', fontSize: 17, margin: 0, fontWeight: 500 }}>
            Manage job openings, view applicants, and track hiring progress.
          </p>
        </div>
        <button
          style={{
            background: 'linear-gradient(90deg, #2563eb 60%, #1e40af 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 26px', fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 12px #2563eb22', transition: 'background 0.2s', letterSpacing: 0.5,
          }}
          onClick={() => setModalOpen(true)}
        >
          + Add New Position
        </button>
        {modalOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#0005', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <form onSubmit={handleAdd} style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 340, boxShadow: '0 6px 32px #0003', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Add New Position</h3>
              <label style={{ fontWeight: 600 }}>Position
                <input required value={form.position} onChange={e => setForm(f => ({ ...f, position: e.target.value }))} style={{ marginTop: 6, width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 15 }} />
              </label>
              <label style={{ fontWeight: 600 }}>Department
                <input required value={form.department} onChange={e => setForm(f => ({ ...f, department: e.target.value }))} style={{ marginTop: 6, width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 15 }} />
              </label>
              <label style={{ fontWeight: 600 }}>Status
                <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))} style={{ marginTop: 6, width: '100%', padding: 8, borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 15 }}>
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </label>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 8 }}>
                <button type="button" onClick={() => setModalOpen(false)} style={{ background: '#f1f5f9', color: '#222', border: '1px solid #e5e7eb', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Add</button>
              </div>
            </form>
          </div>
        )} 
      </div>
      <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 6px 32px #0002', padding: '2.5rem 2rem', marginTop: 0, border: '1px solid #f1f5f9' }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 22, color: '#222' }}>Open Positions</h2>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 16, background: '#fafbfc', borderRadius: 10, overflow: 'hidden', boxShadow: '0 1px 4px #0001' }}> 
          <thead style={{ background: '#f3f4f6' }}>
            <tr>
              <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: 700, color: '#222', borderTopLeftRadius: 10 }}>Position</th>
              <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: 700, color: '#222' }}>Department</th>
              <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: 700, color: '#222' }}>Status</th>
              <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: 700, color: '#222', borderTopRightRadius: 10 }}>Actions</th>
            </tr>
          </thead>
          <tbody style={{ background: '#fff' }}>
            {jobs.map((job, idx) => (
              <tr key={idx} style={{ transition: 'background 0.2s', cursor: 'pointer' }} onMouseOver={e => (e.currentTarget.style.background='#f1f5f9')} onMouseOut={e => (e.currentTarget.style.background='#fff')}>
                <td style={{ borderBottom: '1px solid #e5e7eb', padding: '14px 12px', fontWeight: 600 }}>{job.position}</td>
                <td style={{ borderBottom: '1px solid #e5e7eb', padding: '14px 12px' }}>{job.department}</td>
                <td style={{ borderBottom: '1px solid #e5e7eb', padding: '14px 12px' }}>{badge(job.status)}</td>
                <td style={{ borderBottom: '1px solid #e5e7eb', padding: '14px 12px' }}>
                  <button style={{ marginRight: 10, background: '#f1f5f9', border: '1px solid #e5e7eb', borderRadius: 6, padding: '7px 16px', fontWeight: 600, fontSize: 14, cursor: 'pointer', color: '#222', transition: 'background 0.2s' }}>View</button>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://your-company.com/job/' + job.position.toLowerCase().replace(/\s+/g, '-'))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: '#0a66c2', color: '#fff', border: 'none', borderRadius: 6, padding: '7px 16px', fontWeight: 700, textDecoration: 'none', fontSize: 14, marginLeft: 4, display: 'inline-flex', alignItems: 'center', transition: 'background 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.background='#004182')}
                    onMouseOut={e => (e.currentTarget.style.background='#0a66c2')}
                  >
                    <span style={{ fontSize: 17, marginRight: 7 }}>🔗</span> Share on LinkedIn
                  </a>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}