import React from 'react';
import { AlertTriangle, Info, AlertCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface EmergencyAlertProps {
  severity: string;
  onClose: () => void;
}

const EmergencyAlert: React.FC<EmergencyAlertProps> = ({ severity, onClose }) => {
  const { t } = useTranslation();
  let bgColor = 'bg-accent-600';
  let icon = <AlertCircle className="h-5 w-5" />;
  
  switch (severity) {
    case 'warning':
      bgColor = 'bg-amber-500';
      icon = <AlertTriangle className="h-5 w-5" />;
      break;
    case 'info':
      bgColor = 'bg-blue-500';
      icon = <Info className="h-5 w-5" />;
      break;
    case 'critical':
      bgColor = 'bg-red-600';
      icon = <AlertCircle className="h-5 w-5" />;
      break;
    default:
      bgColor = 'bg-accent-600';
      icon = <AlertCircle className="h-5 w-5" />;
  }
  
  return (
    <div className={`${bgColor} text-white`}>
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {icon}
            <p className="text-sm font-medium md:text-base">{t('common.covidAlert')}</p>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full p-1 text-white transition-colors hover:bg-white/10"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAlert;