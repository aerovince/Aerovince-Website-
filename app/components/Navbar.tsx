


"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  LogOut,
  LayoutDashboard,
  Shield,
  Loader2,
} from "lucide-react";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import AnnouncementBar from "./AnnouncementBar";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "About Us",  href: "/about" },
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Awards",    href: "/awards" },
  // { label: "Careers",   href: "/careers" },
  { label: "Blogs",     href: "/blog" },
  { label: "Contact",   href: "/contact" },
  // { label: "Startup",   href: "/startup-growth" },
];

function GoogleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [dropdownOpen, setDropdownOpen]   = useState(false);
  const [adminOpen, setAdminOpen]         = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [googleError, setGoogleError]     = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const adminRef    = useRef<HTMLDivElement>(null);

  const { user, userDoc, loading, isAdmin } = useAuth();

  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdownOpen(false);
      if (adminRef.current && !adminRef.current.contains(e.target as Node))
        setAdminOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const handleGoogleSignIn = async () => {
    setGoogleError(null);
    setGoogleLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setAdminOpen(false);
      setMobileOpen(false);
    } catch (err: any) {
      if (
        err?.code !== "auth/popup-closed-by-user" &&
        err?.code !== "auth/cancelled-popup-request"
      ) {
        setGoogleError("Sign-in failed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  const getInitials = (name: string | null) =>
    name ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "?";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-sm shadow-gray-900/5"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <AnnouncementBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* ── Logo ── */}
          <motion.a
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            whileHover={{ scale: 1.02 }}
            aria-label="Aerovince home"
          >
           <div className="relative">
  <Image
    src="/logos/Aero logonew.png"
    alt="Aerovince"
    width={220}
    height={40}
    className="h-10 w-auto object-contain"
    priority
  />
</div>
          </motion.a>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150 group rounded-lg hover:bg-gray-50/80 whitespace-nowrap"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {link.label}
                <span className="absolute inset-x-3 bottom-1.5 h-px bg-gradient-to-r from-blue-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </motion.a>
            ))}
          </div>

          {/* ── Desktop Right CTAs + Auth ── */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">

            {/* <motion.a
              href="/grow"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-bold transition-all shadow-md shadow-blue-700/20 whitespace-nowrap"
            >
              <TrendingUp size={13} />
              Grow
            </motion.a> */}

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-5 py-2 bg-gray-900 text-white text-sm font-bold rounded-full whitespace-nowrap shadow-md shadow-gray-900/15 group relative overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: springX, y: springY }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-1.5">
                Let&apos;s Talk
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
            </motion.a>

            {/* ── Auth ── */}
            {!loading && (
              user ? (
                <div className="relative" ref={dropdownRef}>
                  <motion.button
                    onClick={() => setDropdownOpen((v) => !v)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 rounded-full pl-1 pr-3 py-1 border border-gray-200 hover:border-gray-300 bg-white shadow-sm hover:shadow transition-all"
                  >
                    {user.photoURL ? (
                      <Image src={user.photoURL} alt={user.displayName ?? "User"} width={28} height={28} className="rounded-full object-cover" />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                        {getInitials(user.displayName)}
                      </div>
                    )}
                    <span className="text-gray-800 text-sm font-medium max-w-[80px] truncate">
                      {user.displayName?.split(" ")[0] ?? user.email?.split("@")[0]}
                    </span>
                    {isAdmin && (
                      <span className="text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-1.5 py-0.5 leading-none">
                        Admin
                      </span>
                    )}
                    <ChevronDown size={13} className={`text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </motion.button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute right-0 mt-2 w-60 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-900/10 overflow-hidden z-50"
                      >
                        <div className="px-4 py-3.5 border-b border-gray-100 bg-gray-50/60">
                          <div className="flex items-center gap-2.5">
                            {user.photoURL ? (
                              <Image src={user.photoURL} alt="avatar" width={36} height={36} className="rounded-full object-cover" />
                            ) : (
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                                {getInitials(user.displayName)}
                              </div>
                            )}
                            <div className="min-w-0">
                              <p className="text-gray-900 text-sm font-semibold truncate">{user.displayName ?? "User"}</p>
                              <p className="text-gray-400 text-xs truncate">{user.email}</p>
                            </div>
                          </div>
                          <div className="mt-2.5 flex items-center gap-1.5">
                            <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider rounded-full px-2 py-0.5 ${
                              isAdmin ? "bg-blue-50 text-blue-600 border border-blue-200" : "bg-gray-100 text-gray-500 border border-gray-200"
                            }`}>
                              {isAdmin && <Shield size={9} />}
                              {userDoc?.role ?? "user"}
                            </span>
                            {userDoc?.loginCount && (
                              <span className="text-[10px] text-gray-400">Login #{userDoc.loginCount}</span>
                            )}
                          </div>
                        </div>
                        <div className="py-1.5">
                          {isAdmin && (
                            <Link href="/admin/dashboard" onClick={() => setDropdownOpen(false)}
                              className="flex items-center gap-3 px-4 py-2.5 text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-sm font-medium transition-colors">
                              <LayoutDashboard size={15} /> Admin Dashboard
                            </Link>
                          )}
                          <button onClick={handleSignOut}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-red-500 hover:text-red-600 hover:bg-red-50 text-sm font-medium transition-colors">
                            <LogOut size={15} /> Sign Out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="relative" ref={adminRef}>
                  <motion.button
                    onClick={() => setAdminOpen((v) => !v)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    aria-label="Admin access"
                    title="Admin access"
                    className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 text-gray-400 hover:text-gray-600 transition-all focus:outline-none"
                  >
                    <ChevronUp size={13} />
                  </motion.button>

                  <AnimatePresence>
                    {adminOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-900/10 p-4 z-50"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Admin Access</p>
                        <motion.button
                          onClick={handleGoogleSignIn}
                          disabled={googleLoading}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 transition-all text-gray-700 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {googleLoading ? <Loader2 size={15} className="animate-spin text-gray-500" /> : <GoogleIcon size={15} />}
                          {googleLoading ? "Signing in…" : "Sign in with Google"}
                        </motion.button>
                        {googleError && <p className="mt-2 text-[11px] text-red-500 text-center">{googleError}</p>}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </div>

          {/* ── Mobile Right ── */}
          <div className="lg:hidden flex items-center gap-2">
            <motion.a
              href="/grow"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-sm shadow-blue-700/20"
            >
              <TrendingUp size={11} /> Grow
            </motion.a>
            <motion.button
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              whileTap={{ scale: 0.92 }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="px-4 py-3 flex flex-col gap-0.5">

              {/* Mobile logo */}
              <div className="flex items-center pb-3 mb-1 border-b border-gray-100">
                <Image
                  src="/logos/Aero logo.png"
                  alt="Aerovince"
                  height={28}
                  width={110}
                  className="h-7 w-auto object-contain"
                />
              </div>

              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="pt-3 mt-1 border-t border-gray-100 flex flex-col gap-2">
                <motion.a
                  href="/grow"
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-200 text-blue-600 font-bold text-sm transition-colors"
                >
                  <TrendingUp size={16} /> Grow My Brand
                </motion.a>
                <motion.a
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden w-full text-center bg-gray-900 text-white text-sm font-bold px-5 py-3 rounded-xl group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-1.5">
                    Let&apos;s Talk <ArrowRight size={14} />
                  </span>
                </motion.a>
              </div>

              {!loading && user && (
                <div className="border-t border-gray-100 pt-4 mt-2 space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    {user.photoURL ? (
                      <Image src={user.photoURL} alt="Profile" width={40} height={40} className="rounded-full object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                        {getInitials(user.displayName)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-gray-900 font-semibold text-sm truncate">{user.displayName ?? "User"}</p>
                      <p className="text-gray-400 text-xs truncate">{user.email}</p>
                      <span className={`inline-flex items-center gap-1 mt-1 text-[10px] font-bold uppercase tracking-wider rounded-full px-2 py-0.5 ${
                        isAdmin ? "bg-blue-50 text-blue-600 border border-blue-200" : "bg-gray-100 text-gray-500 border border-gray-200"
                      }`}>
                        {isAdmin && <Shield size={9} />}
                        {userDoc?.role ?? "user"}
                      </span>
                    </div>
                  </div>
                  {isAdmin && (
                    <Link href="/admin/dashboard" onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 text-blue-600 font-medium text-sm hover:bg-blue-50 rounded-xl transition-colors">
                      <LayoutDashboard size={16} /> Admin Dashboard
                    </Link>
                  )}
                  <button onClick={handleSignOut}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 text-red-500 font-medium text-sm hover:bg-red-50 rounded-xl transition-colors">
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}