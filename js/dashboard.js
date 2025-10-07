

    // dashboard.js - Add this file if missing
document.addEventListener('DOMContentLoaded', function() {
    
    // Sample patient data
    const patients = [
        {
            id: 'PT-2589',
            ward: 'ICU-Ward 3',
            status: 'MDR Positive',
            lastContact: '2 hours ago',
            riskLevel: 'High'
        },
        {
            id: 'PT-2590',
            ward: 'General Ward 1',
            status: 'Monitored',
            lastContact: '4 hours ago',
            riskLevel: 'Medium'
        },
        {
            id: 'PT-2591',
            ward: 'ICU-Ward 2',
            status: 'Safe',
            lastContact: '1 hour ago',
            riskLevel: 'Low'
        },
        {
            id: 'PT-2592',
            ward: 'Emergency Ward',
            status: 'Monitored',
            lastContact: '30 min ago',
            riskLevel: 'Medium'
        },
        {
            id: 'PT-2593',
            ward: 'General Ward 2',
            status: 'Safe',
            lastContact: '6 hours ago',
            riskLevel: 'Low'
        },
        {
            id: 'PT-2594',
            ward: 'ICU-Ward 3',
            status: 'MDR Positive',
            lastContact: '3 hours ago',
            riskLevel: 'High'
        }
    ];
    
    // Sample alerts data
    const alerts = [
        {
            type: 'critical',
            title: 'MDR Pathogen Detected - ICU Ward 3',
            time: '15 minutes ago'
        },
        {
            type: 'critical',
            title: 'High-Risk Contact Chain Identified',
            time: '1 hour ago'
        },
        {
            type: 'warning',
            title: 'Increased Activity in Emergency Ward',
            time: '2 hours ago'
        },
        {
            type: 'critical',
            title: 'Lab Results: Patient PT-2589 Positive',
            time: '3 hours ago'
        },
        {
            type: 'warning',
            title: 'Staff Member Exposed - Notification Sent',
            time: '4 hours ago'
        }
    ];
    
    // Sample ward risk data
    const wardRisks = [
        { ward: 'ICU Ward 3', risk: 85, level: 'danger' },
        { ward: 'Emergency Ward', risk: 62, level: 'warning' },
        { ward: 'ICU Ward 2', risk: 45, level: 'warning' },
        { ward: 'General Ward 1', risk: 28, level: 'success' },
        { ward: 'General Ward 2', risk: 18, level: 'success' },
        { ward: 'Surgery Ward', risk: 12, level: 'success' }
    ];
    
    // Populate patients table
    const patientsTableBody = document.getElementById('patients-table-body');
    if (patientsTableBody) {
        patientsTableBody.innerHTML = patients.map(patient => `
            <tr>
                <td><strong>${patient.id}</strong></td>
                <td>${patient.ward}</td>
                <td>
                    <span class="status-badge ${getStatusClass(patient.status)}">
                        ${patient.status}
                    </span>
                </td>
                <td>${patient.lastContact}</td>
                <td>
                    <span class="risk-badge ${getRiskClass(patient.riskLevel)}">
                        ${patient.riskLevel}
                    </span>
                </td>
                <td>
                    <button class="btn btn-outline btn-small" onclick="viewPatientDetails('${patient.id}')">
                        View
                    </button>
                </td>
            </tr>
        `).join('');
    }
    
    // Populate alerts list
    const alertsList = document.getElementById('alerts-list');
    if (alertsList) {
        alertsList.innerHTML = alerts.map(alert => `
            <div class="alert-item ${alert.type}">
                <div class="alert-title">${alert.title}</div>
                <div class="alert-time">${alert.time}</div>
            </div>
        `).join('');
    }
    
    // Populate ward risk list
    const wardRiskList = document.getElementById('ward-risk-list');
    if (wardRiskList) {
        wardRiskList.innerHTML = wardRisks.map(ward => `
            <div class="ward-risk-item">
                <div class="ward-risk-header">
                    <span class="ward-name">${ward.ward}</span>
                    <span>${ward.risk}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill ${ward.level}" style="width: ${ward.risk}%"></div>
                </div>
            </div>
        `).join('');
    }
    
    // Helper functions
    function getStatusClass(status) {
        switch(status.toLowerCase()) {
            case 'safe': return 'safe';
            case 'monitored': return 'monitored';
            case 'mdr positive': return 'mdr-positive';
            default: return 'safe';
        }
    }
    
    function getRiskClass(risk) {
        switch(risk.toLowerCase()) {
            case 'low': return 'low';
            case 'medium': return 'medium';
            case 'high': return 'high';
            default: return 'low';
        }
    }
    
    // Make function global for button onclick
    window.viewPatientDetails = function(patientId) {
        alert(`Viewing details for patient ${patientId}\n\nThis would open a detailed view with:\n- Complete contact history\n- Movement timeline\n- Lab results\n- Exposure risk analysis`);
    };
    
    // Simulate real-time updates
    let updateInterval;
    function startRealTimeUpdates() {
        updateInterval = setInterval(() => {
            const lastUpdate = document.querySelector('.last-update');
            if (lastUpdate) {
                lastUpdate.textContent = 'Last updated: Just now';
            }
        }, 30000); // Update every 30 seconds
    }
    
    startRealTimeUpdates();
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', function() {
        if (updateInterval) {
            clearInterval(updateInterval);
        }
    });
});
    
    // Sample alerts data
    const alerts = [
        {
            type: 'critical',
            title: 'MDR Pathogen Detected - ICU Ward 3',
            time: '15 minutes ago'
        },
        {
            type: 'critical',
            title: 'High-Risk Contact Chain Identified',
            time: '1 hour ago'
        },
        {
            type: 'warning',
            title: 'Increased Activity in Emergency Ward',
            time: '2 hours ago'
        },
        {
            type: 'critical',
            title: 'Lab Results: Patient PT-2589 Positive',
            time: '3 hours ago'
        },
        {
            type: 'warning',
            title: 'Staff Member Exposed - Notification Sent',
            time: '4 hours ago'
        }
    ];
    
    // Sample ward risk data
    const wardRisks = [
        { ward: 'ICU Ward 3', risk: 85, level: 'danger' },
        { ward: 'Emergency Ward', risk: 62, level: 'warning' },
        { ward: 'ICU Ward 2', risk: 45, level: 'warning' },
        { ward: 'General Ward 1', risk: 28, level: 'success' },
        { ward: 'General Ward 2', risk: 18, level: 'success' },
        { ward: 'Surgery Ward', risk: 12, level: 'success' }
    ];
    // Add interactivity to the heatmap
        document.addEventListener('DOMContentLoaded', function() {
            const wards = document.querySelectorAll('.ward');
            
            wards.forEach(ward => {
                ward.addEventListener('click', function() {
                    const wardName = this.querySelector('.ward-name').textContent;
                    const riskLevel = this.querySelector('.ward-risk').textContent;
                    
                    alert(`Ward: ${wardName}\nRisk Level: ${riskLevel}\n\nThis would show detailed analytics for this specific area.`);
                });
            });
            
            // Simulate real-time updates
            setInterval(() => {
                // Randomly update one ward's risk level for demonstration
                const randomWard = wards[Math.floor(Math.random() * wards.length)];
                const riskClasses = ['low-risk', 'medium-risk', 'high-risk', 'critical-risk'];
                const currentClass = Array.from(randomWard.classList).find(cls => cls.includes('risk'));
                
                if (currentClass) {
                    randomWard.classList.remove(currentClass);
                    const newRiskClass = riskClasses[Math.floor(Math.random() * riskClasses.length)];
                    randomWard.classList.add(newRiskClass);
                    
                    // Update the risk text
                    const riskText = randomWard.querySelector('.ward-risk');
                    if (riskText) {
                        riskText.textContent = newRiskClass.replace('-risk', '').charAt(0).toUpperCase() + 
                                              newRiskClass.replace('-risk', '').slice(1);
                    }
                }
            }, 10000); // Update every 10 seconds
        });
    // Populate patients table
    const patientsTableBody = document.getElementById('patients-table-body');
    if (patientsTableBody) {
        patientsTableBody.innerHTML = patients.map(patient => `
            <tr>
                <td><strong>${patient.id}</strong></td>
                <td>${patient.ward}</td>
                <td>
                    <span class="status-badge ${getStatusClass(patient.status)}">
                        ${patient.status}
                    </span>
                </td>
                <td>${patient.lastContact}</td>
                <td>
                    <span class="risk-badge ${getRiskClass(patient.riskLevel)}">
                        ${patient.riskLevel}
                    </span>
                </td>
                <td>
                    <button class="btn btn-outline btn-small" onclick="viewPatientDetails('${patient.id}')">
                        View
                    </button>
                </td>
            </tr>
        `).join('');
    }
    
    // Populate alerts list
    const alertsList = document.getElementById('alerts-list');
    if (alertsList) {
        alertsList.innerHTML = alerts.map(alert => `
            <div class="alert-item ${alert.type}">
                <div class="alert-title">${alert.title}</div>
                <div class="alert-time">${alert.time}</div>
            </div>
        `).join('');
    }
    
    // Populate ward risk list
    const wardRiskList = document.getElementById('ward-risk-list');
    if (wardRiskList) {
        wardRiskList.innerHTML = wardRisks.map(ward => `
            <div class="ward-risk-item">
                <div class="ward-risk-header">
                    <span class="ward-name">${ward.ward}</span>
                    <span>${ward.risk}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill ${ward.level}" style="width: ${ward.risk}%"></div>
                </div>
            </div>
        `).join('');
    }
    
    // Helper functions
    function getStatusClass(status) {
        switch(status.toLowerCase()) {
            case 'safe': return 'safe';
            case 'monitored': return 'monitored';
            case 'mdr positive': return 'mdr-positive';
            default: return 'safe';
        }
    }
    
    function getRiskClass(risk) {
        switch(risk.toLowerCase()) {
            case 'low': return 'low';
            case 'medium': return 'medium';
            case 'high': return 'high';
            default: return 'low';
        }
    }
    
    // Make function global for button onclick
    window.viewPatientDetails = function(patientId) {
        alert(`Viewing details for patient ${patientId}\n\nThis would open a detailed view with:\n- Complete contact history\n- Movement timeline\n- Lab results\n- Exposure risk analysis`);
    };
    
    // Simulate real-time updates
    let updateInterval;
    function startRealTimeUpdates() {
        updateInterval = setInterval(() => {
            const lastUpdate = document.querySelector('.last-update');
            if (lastUpdate) {
                lastUpdate.textContent = 'Last updated: Just now';
            }
        }, 30000); // Update every 30 seconds
    }
    
    startRealTimeUpdates();
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', function() {
        if (updateInterval) {
            clearInterval(updateInterval);
        }
    });
});
