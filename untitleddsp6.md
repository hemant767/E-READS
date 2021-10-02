clc;
clear all;
close all;
%Design of analog Butterworth filter
alphap=0.4;
alphas=30;
fp=400;
fs=800;
f=2000;
omegap=2*fp/f;
omegas=2*fs/f;

[N wn]=buttord(omegap,omegas,alphap,alphas);
[b a]=butter(N,wn);
w=0:0.01:pi;
[h w]=freqz(b,a,w,'whole');
m=abs(h);
an=angle(h);
subplot(2,1,1);
%Plotting magnitude response

plot(w/pi,20*log(m));
grid;
xlabel('Normal Frequency');
ylabel('Gain in dB');
title('magnitude Respons of LPF Hemant Raj 19BEE0179');
subplot(2,1,2);

%Plotting phase Response
plot(w/pi,an);
grid;
xlabel('Normalised Frequency');
ylabel('Gains in radians');
title('Phase Response of LPF');