"use client";
import React, { useEffect } from "react";

export default function Toast({ show, onClose, message, type = "success" }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const icons = {
    success: "mi-check",
    error: "mi-close",
    info: "mi-circle-information",
  };

  const colors = {
    success: {
      bg: "rgba(34, 197, 94, 0.1)",
      border: "#22c55e",
      text: "#22c55e",
      iconBg: "rgba(34, 197, 94, 0.2)",
    },
    error: {
      bg: "rgba(239, 68, 68, 0.1)",
      border: "#ef4444",
      text: "#ef4444",
      iconBg: "rgba(239, 68, 68, 0.2)",
    },
    info: {
      bg: "rgba(59, 130, 246, 0.1)",
      border: "#3b82f6",
      text: "#3b82f6",
      iconBg: "rgba(59, 130, 246, 0.2)",
    },
  };

  const currentColor = colors[type];

  return (
    <>
      <style jsx>{`
        .toast-container {
          position: fixed;
          top: 100px;
          right: 30px;
          z-index: 9999;
          transform: ${show ? "translateX(0)" : "translateX(400px)"};
          opacity: ${show ? "1" : "0"};
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .toast {
          background: rgba(20, 20, 20, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid ${currentColor.border};
          border-radius: 12px;
          padding: 16px 20px;
          min-width: 350px;
          max-width: 450px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5),
                      0 0 20px ${currentColor.border}40;
          display: flex;
          align-items: center;
          gap: 15px;
          position: relative;
          overflow: hidden;
        }

        .toast::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: ${currentColor.border};
          animation: ${show ? "progress 5s linear" : "none"};
        }

        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        .toast-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: ${currentColor.iconBg};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .toast-icon i {
          color: ${currentColor.text};
          font-size: 20px;
        }

        .toast-content {
          flex: 1;
        }

        .toast-title {
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 4px;
          font-size: 16px;
          letter-spacing: 0.5px;
        }

        .toast-message {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.4;
        }

        .toast-close {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          padding: 5px;
          margin-left: 10px;
          transition: all 0.2s ease;
          border-radius: 6px;
        }

        .toast-close:hover {
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .toast-container {
            top: 20px;
            right: 20px;
            left: 20px;
          }
          
          .toast {
            min-width: auto;
            max-width: 100%;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .toast-enter {
          animation: slideIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>

      <div className={`toast-container ${show ? "toast-enter" : ""}`}>
        <div className="toast">
          <div className="toast-icon">
            <i className={icons[type]}></i>
          </div>
          <div className="toast-content">
            <div className="toast-title">
              {type === "success" && "Success!"}
              {type === "error" && "Error!"}
              {type === "info" && "Info"}
            </div>
            <div className="toast-message">{message}</div>
          </div>
          <button className="toast-close" onClick={onClose}>
            <i className="mi-close"></i>
          </button>
        </div>
      </div>
    </>
  );
}