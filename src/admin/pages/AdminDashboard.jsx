import { useEffect, useMemo, useState } from "react";

import {
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Loader2,
  LogOut,
  MapPin,
  Menu,
  MessageSquareQuote,
  RefreshCw,
  Search,
  X,
  XCircle,
} from "lucide-react";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const STATUS_CONFIG = {
  NEW: {
    label: "New Quotes",
    icon: MessageSquareQuote,
    badge: "bg-blue-50 text-blue-600",
  },
  PENDING: {
    label: "Pending",
    icon: Clock3,
    badge: "bg-amber-50 text-amber-600",
  },
  CONFIRMED: {
    label: "Confirmed",
    icon: CalendarDays,
    badge: "bg-green-50 text-green-600",
  },
  COMPLETED: {
    label: "Completed",
    icon: CheckCircle2,
    badge: "bg-emerald-50 text-emerald-600",
  },
  CANCELLED: {
    label: "Cancelled",
    icon: XCircle,
    badge: "bg-red-50 text-red-600",
  },
};

const MENU_ITEMS = [
  {
    status: "NEW",
    label: "New Quotes",
    icon: MessageSquareQuote,
  },
  {
    status: "PENDING",
    label: "Pending",
    icon: Clock3,
  },
  {
    status: "CONFIRMED",
    label: "Confirmed",
    icon: CalendarDays,
  },
  {
    status: "COMPLETED",
    label: "Completed",
    icon: CheckCircle2,
  },
  {
    status: "CANCELLED",
    label: "Cancelled",
    icon: XCircle,
  },
];

function StatCard({
  title,
  value,
  description,
  icon: Icon,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-[#021E3B]">
            {value}
          </h3>

          <p className="mt-2 text-xs text-slate-400">
            {description}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1B9FE6]/10 text-[#1B9FE6]">
          <Icon size={21} />
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const config =
    STATUS_CONFIG[status] || STATUS_CONFIG.NEW;

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${config.badge}`}
    >
      {config.label}
    </span>
  );
}

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [activeStatus, setActiveStatus] = useState("NEW");

  const [search, setSearch] = useState("");

  const [area, setArea] = useState("All Areas");

  const [selectedQuote, setSelectedQuote] = useState(null);

  const [quotes, setQuotes] = useState([]);

  const [loadingQuotes, setLoadingQuotes] = useState(true);

  const [quoteError, setQuoteError] = useState("");

  const [actionLoading, setActionLoading] = useState(false);

  const [admin, setAdmin] = useState(null);

  const [quoteImages, setQuoteImages] = useState([]);

  const [loadingImages, setLoadingImages] = useState(false);

  const [imageError, setImageError] = useState("");

  const [previewImage, setPreviewImage] = useState(null);

  const [showAppointmentModal, setShowAppointmentModal] =
    useState(false);

  const [appointmentDate, setAppointmentDate] =
    useState("");

  const [appointmentTime, setAppointmentTime] =
    useState("");

    const [toast, setToast] = useState(null);
    const showToast = (message, type = "success") => {
  setToast({
    message,
    type,
  });

  setTimeout(() => {
    setToast(null);
  }, 3500);
};

  // ==========================================
  // LOAD ADMIN
  // ==========================================

  useEffect(() => {
    try {
      const savedAdmin =
        localStorage.getItem("iqora_admin");

      if (savedAdmin) {
        setAdmin(JSON.parse(savedAdmin));
      }
    } catch (error) {
      console.error(
        "Failed to read admin data:",
        error
      );
    }
  }, []);

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    localStorage.removeItem("iqora_admin_token");
    localStorage.removeItem("iqora_admin");

    window.history.pushState(
      {},
      "",
      "/admin/login"
    );

    window.dispatchEvent(
      new PopStateEvent("popstate")
    );
  };

  // ==========================================
  // REDIRECT LOGIN
  // ==========================================

  const redirectToLogin = () => {
    localStorage.removeItem("iqora_admin_token");
    localStorage.removeItem("iqora_admin");

    window.history.pushState(
      {},
      "",
      "/admin/login"
    );

    window.dispatchEvent(
      new PopStateEvent("popstate")
    );
  };

  // ==========================================
  // FORMAT DATE
  // ==========================================

  const formatDate = (date) => {
    if (!date) {
      return "—";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  // ==========================================
  // FORMAT APPOINTMENT DATE
  // ==========================================

  const formatAppointmentDate = (date) => {
    if (!date) {
      return "—";
    }

    const parsedDate = new Date(
      `${date}T00:00:00`
    );

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // ==========================================
  // FORMAT APPOINTMENT TIME
  // ==========================================

  const formatAppointmentTime = (time) => {
    if (!time) {
      return "—";
    }

    const value = String(time).slice(0, 5);

    const [hours, minutes] = value.split(":");

    if (!hours || !minutes) {
      return time;
    }

    const date = new Date();

    date.setHours(
      Number(hours),
      Number(minutes),
      0,
      0
    );

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  // ==========================================
  // FETCH QUOTES
  // ==========================================

  const fetchQuotes = async () => {
    try {
      setLoadingQuotes(true);
      setQuoteError("");

      const token =
        localStorage.getItem(
          "iqora_admin_token"
        );

      if (!token) {
        redirectToLogin();
        return;
      }

      const response = await fetch(
        `${API_URL}/api/quotes`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        redirectToLogin();
        return;
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to load quotes."
        );
      }

      setQuotes(data.quotes || []);
    } catch (error) {
      console.error(
        "Fetch quotes error:",
        error
      );

      setQuoteError(
        error.message ||
          "Failed to load quote requests."
      );
    } finally {
      setLoadingQuotes(false);
    }
  };

  // ==========================================
  // LOAD QUOTE IMAGES
  // ==========================================

  const loadQuoteImages = async (quoteId) => {
    try {
      setLoadingImages(true);
      setImageError("");
      setQuoteImages([]);

      const token =
        localStorage.getItem(
          "iqora_admin_token"
        );

      if (!token) {
        redirectToLogin();
        return;
      }

      const response = await fetch(
        `${API_URL}/api/quotes/${quoteId}/images`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        redirectToLogin();
        return;
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to load quote images."
        );
      }

      setQuoteImages(
        Array.isArray(data.images)
          ? data.images
          : []
      );
    } catch (error) {
      console.error(
        "Load quote images error:",
        error
      );

      setImageError(
        error.message ||
          "Failed to load quote images."
      );
    } finally {
      setLoadingImages(false);
    }
  };

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  useEffect(() => {
    fetchQuotes();
  }, []);

  // ==========================================
  // LOAD IMAGES WHEN QUOTE SELECTED
  // ==========================================

  useEffect(() => {
    if (!selectedQuote) {
      setQuoteImages([]);
      setImageError("");
      setPreviewImage(null);
      return;
    }

    loadQuoteImages(selectedQuote.id);
  }, [selectedQuote]);

  // ==========================================
  // STATUS COUNTS
  // ==========================================

  const statusCounts = useMemo(() => {
    return {
      NEW: quotes.filter(
        (quote) => quote.status === "NEW"
      ).length,

      PENDING: quotes.filter(
        (quote) => quote.status === "PENDING"
      ).length,

      CONFIRMED: quotes.filter(
        (quote) => quote.status === "CONFIRMED"
      ).length,

      COMPLETED: quotes.filter(
        (quote) => quote.status === "COMPLETED"
      ).length,

      CANCELLED: quotes.filter(
        (quote) => quote.status === "CANCELLED"
      ).length,
    };
  }, [quotes]);

  // ==========================================
  // AREAS FOR CURRENT STATUS
  // ==========================================

  const currentStatusQuotes = useMemo(() => {
    return quotes.filter(
      (quote) => quote.status === activeStatus
    );
  }, [quotes, activeStatus]);

  const areas = useMemo(() => {
    return [
      "All Areas",
      ...Array.from(
        new Set(
          currentStatusQuotes
            .map((quote) => quote.area)
            .filter(Boolean)
        )
      ),
    ];
  }, [currentStatusQuotes]);

  // ==========================================
  // FILTER CURRENT QUOTES
  // ==========================================

  const filteredQuotes = useMemo(() => {
    const searchValue =
      search.toLowerCase().trim();

    return currentStatusQuotes.filter(
      (quote) => {
        const matchesArea =
          area === "All Areas" ||
          quote.area === area;

        const matchesSearch =
          !searchValue ||
          (quote.customer || "")
            .toLowerCase()
            .includes(searchValue) ||
          (quote.email || "")
            .toLowerCase()
            .includes(searchValue) ||
          (quote.phone || "")
            .toLowerCase()
            .includes(searchValue) ||
          (quote.service || "")
            .toLowerCase()
            .includes(searchValue);

        return (
          matchesArea && matchesSearch
        );
      }
    );
  }, [
    currentStatusQuotes,
    area,
    search,
  ]);

  // ==========================================
  // CHANGE SIDEBAR STATUS
  // ==========================================

  const handleStatusChange = (status) => {
    setActiveStatus(status);
    setArea("All Areas");
    setSearch("");
    setSelectedQuote(null);
    setSidebarOpen(false);
  };

  // ==========================================
  // OPEN APPOINTMENT MODAL
  // ==========================================

  const openAppointmentModal = () => {
    if (!selectedQuote) {
      return;
    }

    setAppointmentDate(
      selectedQuote.appointment_date
        ? String(
            selectedQuote.appointment_date
          ).slice(0, 10)
        : ""
    );

    setAppointmentTime(
      selectedQuote.appointment_time
        ? String(
            selectedQuote.appointment_time
          ).slice(0, 5)
        : ""
    );

    setShowAppointmentModal(true);
  };

  // ==========================================
  // UPDATE QUOTE STATUS
  // ==========================================

  const updateQuoteStatus = async (
    status,
    options = {}
  ) => {
    if (!selectedQuote || actionLoading) {
      return;
    }

    try {
      setActionLoading(true);

      const token =
        localStorage.getItem(
          "iqora_admin_token"
        );

      if (!token) {
        redirectToLogin();
        return;
      }

      const body = {
        status,
      };

      if (options.appointmentDate) {
        body.appointment_date =
          options.appointmentDate;
      }

      if (options.appointmentTime) {
        body.appointment_time =
          options.appointmentTime;
      }

      const response = await fetch(
        `${API_URL}/api/quotes/${selectedQuote.id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        redirectToLogin();
        return;
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to update quote status."
        );
      }

      const updatedQuote =
        data.quote || {
          ...selectedQuote,
          status,
          appointment_date:
            options.appointmentDate ||
            selectedQuote.appointment_date,
          appointment_time:
            options.appointmentTime ||
            selectedQuote.appointment_time,
        };

      setQuotes((currentQuotes) =>
        currentQuotes.map((quote) =>
          quote.id === selectedQuote.id
            ? {
                ...quote,
                ...updatedQuote,
              }
            : quote
        )
      );

      setSelectedQuote(null);
      setShowAppointmentModal(false);

    showToast(
  status === "CONFIRMED"
    ? "Appointment confirmed successfully."
    : status === "PENDING"
    ? "Quote marked as pending."
    : status === "COMPLETED"
    ? "Appointment marked as completed."
    : status === "CANCELLED"
    ? "Quote cancelled successfully."
    : "Quote status updated successfully.",
  "success"
);
    } catch (error) {
      console.error(
        "Update quote status error:",
        error
      );

      showToast(
        error.message ||
          "Failed to update quote status."
      );
    } finally {
      setActionLoading(false);
    }
  };

  // ==========================================
  // CONFIRM APPOINTMENT
  // ==========================================

  const confirmAppointment = async () => {
    if (
      !appointmentDate ||
      !appointmentTime
    ) {
     showToast(
  "Please select appointment date and time.",
  "error"
);
      return;
    }

    await updateQuoteStatus("CONFIRMED", {
      appointmentDate,
      appointmentTime,
    });
  };

  // ==========================================
  // PENDING
  // ==========================================

  const markAsPending = async () => {
    await updateQuoteStatus("PENDING");
  };

  // ==========================================
  // COMPLETED
  // ==========================================

  const markAsCompleted = async () => {
    await updateQuoteStatus("COMPLETED");
  };

  // ==========================================
  // CANCEL
  // ==========================================

  const cancelQuote = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this quote?"
    );

    if (!confirmed) {
      return;
    }

    await updateQuoteStatus("CANCELLED");
  };

  // ==========================================
  // RENDER
  // ==========================================

  const activeConfig =
    STATUS_CONFIG[activeStatus];

  const ActiveIcon = activeConfig.icon;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* MOBILE OVERLAY */}

      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() =>
            setSidebarOpen(false)
          }
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* LOGO */}

        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1B9FE6] text-white">
              <span className="text-lg font-bold">
                I
              </span>
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide text-[#021E3B]">
                IQORA
              </h1>

              <p className="text-xs text-slate-400">
                Admin Portal
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              setSidebarOpen(false)
            }
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* NAVIGATION */}

        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          <p className="px-3 pb-2 pt-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Quote Management
          </p>

          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;

            const count =
              statusCounts[item.status] || 0;

            const active =
              activeStatus === item.status;

            return (
              <button
                key={item.status}
                type="button"
                onClick={() =>
                  handleStatusChange(
                    item.status
                  )
                }
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-[#1B9FE6]/10 text-[#1B9FE6]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#021E3B]"
                }`}
              >
                <Icon size={19} />

                <span className="flex-1 text-left">
                  {item.label}
                </span>

                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    active
                      ? "bg-[#1B9FE6] text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </nav>

        {/* ADMIN PROFILE */}

        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#021E3B] text-sm font-bold text-white">
              {(admin?.name || "A")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800">
                {admin?.name ||
                  "Administrator"}
              </p>

              <p className="truncate text-xs text-slate-400">
                {admin?.email || ""}
              </p>
            </div>

            <button
              type="button"
              title="Logout"
              onClick={handleLogout}
              className="shrink-0 text-slate-400 transition hover:text-red-500"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN */}

      <div className="lg:ml-72">
        {/* TOPBAR */}

        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setSidebarOpen(true)
                }
                className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
              >
                <Menu size={22} />
              </button>

              <div>
                <h2 className="text-xl font-bold text-[#021E3B] sm:text-2xl">
                  {activeConfig.label}
                </h2>

                <p className="hidden text-sm text-slate-400 sm:block">
                  Manage your IQORA quote requests
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={fetchQuotes}
                disabled={loadingQuotes}
                title="Refresh quotes"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <RefreshCw
                  size={18}
                  className={
                    loadingQuotes
                      ? "animate-spin"
                      : ""
                  }
                />
              </button>

              <button
                type="button"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                <Bell size={19} />

                {statusCounts.NEW > 0 && (
                  <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* CONTENT */}

        <main className="p-4 sm:p-6 lg:p-8">
          {/* WELCOME */}

          <div className="mb-7">
            <p className="text-sm font-medium text-[#1B9FE6]">
              Welcome back
            </p>

            <h1 className="mt-1 text-2xl font-bold text-[#021E3B] sm:text-3xl">
              {activeConfig.label}
            </h1>
          </div>

          {/* STATS */}

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            <StatCard
              title="New"
              value={statusCounts.NEW}
              description="New quote requests"
              icon={MessageSquareQuote}
            />

            <StatCard
              title="Pending"
              value={statusCounts.PENDING}
              description="Waiting for confirmation"
              icon={Clock3}
            />

            <StatCard
              title="Confirmed"
              value={statusCounts.CONFIRMED}
              description="Confirmed appointments"
              icon={CalendarDays}
            />

            <StatCard
              title="Completed"
              value={statusCounts.COMPLETED}
              description="Completed appointments"
              icon={CheckCircle2}
            />

            <StatCard
              title="Cancelled"
              value={statusCounts.CANCELLED}
              description="Cancelled quotes"
              icon={XCircle}
            />
          </div>

          {/* QUOTES SECTION */}

          <section className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* SECTION HEADER */}

            <div className="border-b border-slate-100 p-5 sm:p-6">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1B9FE6]/10 text-[#1B9FE6]">
                      <ActiveIcon size={20} />
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-[#021E3B]">
                        {activeConfig.label}
                      </h2>

                      <p className="mt-1 text-sm text-slate-400">
                        {filteredQuotes.length} quote
                        {filteredQuotes.length !==
                        1
                          ? "s"
                          : ""}{" "}
                        in this section
                      </p>
                    </div>
                  </div>
                </div>

                {/* SEARCH */}

                <div className="relative w-full xl:max-w-sm">
                  <Search
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="search"
                    value={search}
                    onChange={(e) =>
                      setSearch(
                        e.target.value
                      )
                    }
                    placeholder="Search customer, email, phone..."
                    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-[#1B9FE6] focus:bg-white focus:ring-4 focus:ring-[#1B9FE6]/10"
                  />
                </div>
              </div>

              {/* AREA FILTERS */}

              {areas.length > 1 && (
                <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
                  {areas.map((item) => {
                    const count =
                      item === "All Areas"
                        ? currentStatusQuotes.length
                        : currentStatusQuotes.filter(
                            (quote) =>
                              quote.area ===
                              item
                          ).length;

                    const active =
                      area === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setArea(item)
                        }
                        className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                          active
                            ? "border-[#1B9FE6] bg-[#1B9FE6] text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:border-[#1B9FE6]/40 hover:text-[#1B9FE6]"
                        }`}
                      >
                        {item}

                        <span
                          className={`rounded-full px-2 py-0.5 text-xs ${
                            active
                              ? "bg-white/20 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* LOADING */}

            {loadingQuotes && (
              <div className="px-6 py-16 text-center">
                <Loader2 className="mx-auto h-8 w-8 animate-spin text-[#1B9FE6]" />

                <p className="mt-4 text-sm text-slate-400">
                  Loading quote requests...
                </p>
              </div>
            )}

            {/* ERROR */}

            {quoteError && !loadingQuotes && (
              <div className="m-5 rounded-xl border border-red-200 bg-red-50 p-4">
                <p className="text-sm font-medium text-red-700">
                  {quoteError}
                </p>

                <button
                  type="button"
                  onClick={fetchQuotes}
                  className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* DESKTOP TABLE */}

            {!loadingQuotes &&
              !quoteError &&
              filteredQuotes.length > 0 && (
                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full min-w-[1050px]">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50/70 text-left">
                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Customer
                        </th>

                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Area
                        </th>

                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Service
                        </th>

                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Rooms / Items
                        </th>

                        {(activeStatus ===
                          "CONFIRMED" ||
                          activeStatus ===
                            "COMPLETED" ||
                          activeStatus ===
                            "PENDING") && (
                          <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Appointment
                          </th>
                        )}

                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Received
                        </th>

                        <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredQuotes.map(
                        (quote) => (
                          <tr
                            key={quote.id}
                            className="border-b border-slate-100 transition hover:bg-slate-50"
                          >
                            <td className="px-6 py-5">
                              <div>
                                <p className="font-semibold text-slate-800">
                                  {quote.customer}
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                  {quote.email ||
                                    "No email"}
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                  {quote.phone ||
                                    "No phone"}
                                </p>
                              </div>
                            </td>

                            <td className="px-6 py-5">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                                <MapPin size={13} />

                                {quote.area ||
                                  "—"}
                              </span>
                            </td>

                            <td className="px-6 py-5 text-sm font-medium text-slate-700">
                              {quote.service ||
                                "—"}
                            </td>

                            <td className="px-6 py-5 text-sm text-slate-500">
                              {quote.rooms ||
                                "—"}
                            </td>

                            {(activeStatus ===
                              "CONFIRMED" ||
                              activeStatus ===
                                "COMPLETED" ||
                              activeStatus ===
                                "PENDING") && (
                              <td className="px-6 py-5">
                                <p className="text-sm font-medium text-slate-700">
                                  {formatAppointmentDate(
                                    quote.appointment_date
                                  )}
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                  {formatAppointmentTime(
                                    quote.appointment_time
                                  )}
                                </p>
                              </td>
                            )}

                            <td className="px-6 py-5">
                              <p className="text-sm text-slate-600">
                                {formatDate(
                                  quote.created_at
                                )}
                              </p>
                            </td>

                            <td className="px-6 py-5 text-right">
                              <button
                                type="button"
                                onClick={() =>
                                  setSelectedQuote(
                                    quote
                                  )
                                }
                                className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-[#1B9FE6] hover:bg-[#1B9FE6]/10"
                              >
                                View
                                <ChevronRight
                                  size={16}
                                />
                              </button>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              )}

            {/* MOBILE */}

            {!loadingQuotes &&
              !quoteError &&
              filteredQuotes.length > 0 && (
                <div className="divide-y divide-slate-100 md:hidden">
                  {filteredQuotes.map(
                    (quote) => (
                      <button
                        key={quote.id}
                        type="button"
                        onClick={() =>
                          setSelectedQuote(
                            quote
                          )
                        }
                        className="block w-full p-5 text-left transition hover:bg-slate-50"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-semibold text-slate-800">
                              {quote.customer}
                            </h3>

                            <p className="mt-1 text-xs text-slate-400">
                              {quote.email ||
                                "No email"}
                            </p>
                          </div>

                          <ChevronRight
                            size={18}
                            className="shrink-0 text-slate-400"
                          />
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          <StatusBadge
                            status={
                              quote.status
                            }
                          />

                          <span className="rounded-full bg-[#1B9FE6]/10 px-3 py-1 text-xs font-medium text-[#1B9FE6]">
                            {quote.area ||
                              "—"}
                          </span>

                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                            {quote.service ||
                              "—"}
                          </span>
                        </div>

                        <div className="mt-4 flex flex-col gap-1 text-xs text-slate-400">
                          <span>
                            {quote.rooms ||
                              "—"}
                          </span>

                          {(activeStatus ===
                            "CONFIRMED" ||
                            activeStatus ===
                              "COMPLETED" ||
                            activeStatus ===
                              "PENDING") && (
                            <span>
                              Appointment:{" "}
                              {formatAppointmentDate(
                                quote.appointment_date
                              )}{" "}
                              at{" "}
                              {formatAppointmentTime(
                                quote.appointment_time
                              )}
                            </span>
                          )}

                          <span>
                            {formatDate(
                              quote.created_at
                            )}
                          </span>
                        </div>
                      </button>
                    )
                  )}
                </div>
              )}

            {/* EMPTY */}

            {!loadingQuotes &&
              !quoteError &&
              filteredQuotes.length === 0 && (
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                    <ActiveIcon size={25} />
                  </div>

                  <h3 className="mt-4 font-semibold text-slate-800">
                    No {activeConfig.label.toLowerCase()} found
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Try changing the area filter
                    or search term.
                  </p>
                </div>
              )}
          </section>
        </main>
      </div>

      {/* ==========================================
          QUOTE DETAILS MODAL
      ========================================== */}

      {selectedQuote && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            {/* HEADER */}

            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <div className="flex items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#1B9FE6]">
                    Quote Request
                  </p>

                  <StatusBadge
                    status={
                      selectedQuote.status
                    }
                  />
                </div>

                <h2 className="mt-2 text-xl font-bold text-[#021E3B]">
                  {selectedQuote.customer}
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedQuote(null)
                }
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={21} />
              </button>
            </div>

            <div className="space-y-5 p-5">
              {/* CUSTOMER INFORMATION */}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 font-medium text-slate-700">
                    {selectedQuote.phone ||
                      "—"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 break-all font-medium text-slate-700">
                    {selectedQuote.email ||
                      "—"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Area
                  </p>

                  <p className="mt-1 font-medium text-slate-700">
                    {selectedQuote.area ||
                      "—"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Service
                  </p>

                  <p className="mt-1 font-medium text-slate-700">
                    {selectedQuote.service ||
                      "—"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Rooms / Items
                  </p>

                  <p className="mt-1 font-medium text-slate-700">
                    {selectedQuote.rooms ||
                      "—"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Received
                  </p>

                  <p className="mt-1 font-medium text-slate-700">
                    {formatDate(
                      selectedQuote.created_at
                    )}
                  </p>
                </div>
              </div>

              {/* APPOINTMENT */}

              {(selectedQuote.appointment_date ||
                selectedQuote.appointment_time) && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={18}
                      className="text-green-600"
                    />

                    <p className="font-semibold text-green-700">
                      Appointment
                    </p>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div>
                      <p className="text-xs text-green-600">
                        Date
                      </p>

                      <p className="mt-1 font-medium text-green-800">
                        {formatAppointmentDate(
                          selectedQuote.appointment_date
                        )}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-green-600">
                        Time
                      </p>

                      <p className="mt-1 font-medium text-green-800">
                        {formatAppointmentTime(
                          selectedQuote.appointment_time
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* CUSTOMER MESSAGE */}

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Customer Message
                </p>

                <div className="mt-2 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  {selectedQuote.message ||
                    "No message provided."}
                </div>
              </div>

              {/* SPECIAL INSTRUCTIONS */}

              {selectedQuote.special_instructions && (
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Special Instructions
                  </p>

                  <div className="mt-2 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-800">
                    {
                      selectedQuote.special_instructions
                    }
                  </div>
                </div>
              )}

              {/* UPLOADED IMAGES */}

              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      Uploaded Images
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      Customer images attached to
                      this quote.
                    </p>
                  </div>

                  {loadingImages && (
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Loader2
                        size={14}
                        className="animate-spin"
                      />
                      Loading...
                    </div>
                  )}
                </div>

                {imageError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                    <p className="text-sm text-red-700">
                      {imageError}
                    </p>
                  </div>
                )}

                {!loadingImages &&
                  !imageError &&
                  quoteImages.length === 0 && (
                    <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
                      <p className="text-sm font-medium text-slate-700">
                        No images uploaded
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        This quote does not contain
                        any customer images.
                      </p>
                    </div>
                  )}

                {quoteImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {quoteImages.map(
                      (image, index) => (
                        <button
                          key={
                            image.key ||
                            index
                          }
                          type="button"
                          onClick={() =>
                            setPreviewImage(
                              image
                            )
                          }
                          className="group overflow-hidden rounded-xl border border-slate-200 bg-white text-left transition hover:border-[#1B9FE6] hover:shadow-md"
                        >
                          <div className="aspect-square overflow-hidden bg-slate-100">
                            <img
                              src={image.url}
                              alt={
                                image.original_name ||
                                `Quote image ${
                                  index + 1
                                }`
                              }
                              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            />
                          </div>

                          <div className="p-3">
                            <p className="truncate text-xs font-medium text-slate-800">
                              {image.original_name ||
                                `Image ${
                                  index + 1
                                }`}
                            </p>

                            <p className="mt-1 text-[11px] text-slate-500">
                              Click to preview
                            </p>
                          </div>
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* ACTIONS */}

              <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:flex-wrap sm:justify-end">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedQuote(null)
                  }
                  className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Close
                </button>

                {/* NEW */}

                {selectedQuote.status ===
                  "NEW" && (
                  <>
                    <button
                      type="button"
                      onClick={
                        openAppointmentModal
                      }
                      disabled={actionLoading}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1B9FE6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#168dd0] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <CalendarDays
                        size={17}
                      />
                      Confirm Appointment
                    </button>

                    <button
                      type="button"
                      onClick={markAsPending}
                      disabled={actionLoading}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <Clock3 size={17} />
                      Mark as Pending
                    </button>

                    <button
                      type="button"
                      onClick={cancelQuote}
                      disabled={actionLoading}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <XCircle size={17} />
                      Cancel
                    </button>
                  </>
                )}

                {/* PENDING */}

                {selectedQuote.status ===
                  "PENDING" && (
                  <>
                    <button
                      type="button"
                      onClick={
                        openAppointmentModal
                      }
                      disabled={actionLoading}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1B9FE6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#168dd0] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <CalendarDays
                        size={17}
                      />
                      Confirm Appointment
                    </button>

                    <button
                      type="button"
                      onClick={cancelQuote}
                      disabled={actionLoading}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <XCircle size={17} />
                      Cancel
                    </button>
                  </>
                )}

                {/* CONFIRMED */}

                {selectedQuote.status ===
                  "CONFIRMED" && (
                  <>
                    <button
                      type="button"
                      onClick={markAsPending}
                      disabled={actionLoading}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <Clock3 size={17} />
                      Mark as Pending
                    </button>

                    <button
                      type="button"
                      onClick={markAsCompleted}
                      disabled={actionLoading}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <CheckCircle2
                        size={17}
                      />
                      Mark as Completed
                    </button>

                    <button
                      type="button"
                      onClick={cancelQuote}
                      disabled={actionLoading}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <XCircle size={17} />
                      Cancel
                    </button>
                  </>
                )}

                {/* COMPLETED */}

                {selectedQuote.status ===
                  "COMPLETED" && (
                  <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700">
                    <CheckCircle2
                      size={17}
                    />
                    Appointment Completed
                  </span>
                )}

                {/* CANCELLED */}

                {selectedQuote.status ===
                  "CANCELLED" && (
                  <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-700">
                    <XCircle size={17} />
                    Quote Cancelled
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          APPOINTMENT MODAL
      ========================================== */}

      {showAppointmentModal &&
        selectedQuote && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#1B9FE6]">
                    Appointment
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[#021E3B]">
                    Confirm Appointment
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setShowAppointmentModal(
                      false
                    )
                  }
                  className="rounded-xl p-2 text-slate-400 hover:bg-slate-100"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-5 p-5">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {selectedQuote.customer}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {selectedQuote.service} •{" "}
                    {selectedQuote.area}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="appointment-date"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Appointment Date
                  </label>

                  <input
                    id="appointment-date"
                    type="date"
                    value={appointmentDate}
                    onChange={(e) =>
                      setAppointmentDate(
                        e.target.value
                      )
                    }
                    min={
                      new Date()
                        .toISOString()
                        .split("T")[0]
                    }
                    className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#1B9FE6] focus:ring-4 focus:ring-[#1B9FE6]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="appointment-time"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Appointment Time
                  </label>

                  <input
                    id="appointment-time"
                    type="time"
                    value={appointmentTime}
                    onChange={(e) =>
                      setAppointmentTime(
                        e.target.value
                      )
                    }
                    className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#1B9FE6] focus:ring-4 focus:ring-[#1B9FE6]/10"
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() =>
                      setShowAppointmentModal(
                        false
                      )
                    }
                    className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={
                      confirmAppointment
                    }
                    disabled={actionLoading}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1B9FE6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#168dd0] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {actionLoading ? (
                      <>
                        <Loader2
                          size={17}
                          className="animate-spin"
                        />
                        Confirming...
                      </>
                    ) : (
                      <>
                        <CheckCircle2
                          size={17}
                        />
                        Confirm Appointment
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* ==========================================
          IMAGE PREVIEW
      ========================================== */}

      {previewImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
          onClick={() =>
            setPreviewImage(null)
          }
        >
          <button
            type="button"
            onClick={() =>
              setPreviewImage(null)
            }
            className="absolute right-4 top-4 rounded-xl bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <img
            src={previewImage.url}
            alt={
              previewImage.original_name ||
              "Quote image"
            }
            onClick={(event) =>
              event.stopPropagation()
            }
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}