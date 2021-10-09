clc;
clear all;
close all;
%Design of analog Butterworth filter
alphap=0.4;
alphas=30;
fp1=0.2;
fp2=0.4;
fs1=0.1;
fs2=0.5;
f=2000;
omegap=[0.2*pi,0.4*pi];
omegas=[0.1*pi,0.5*pi];

[N wn]=buttord(omegap/pi,omegas/pi,alphap,alphas);
[b a]=butter(N,wn,'stop');
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
title('magnitude Respons of Band stop Hemant Raj 19BEE0179');
subplot(2,1,2);

%Plotting phase Response
plot(w/pi,an);
grid;
xlabel('Normalised Frequency');
ylabel('Gains in radians');
title('Phase Response of LPF');