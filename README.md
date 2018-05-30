# ningbo-subway

宁波地铁线路图

http://subway.cnnbuc.com

## 地铁建设流程

1.  规划
2.  审批
3.  开建
4.  盾构贯通
5.  铺轨施工
6.  空载试运行
7.  试运营

## 1 号线

### 一期

* 规划： 2000
* 开建： 2006.06.26
* 空载试运行： 2013.11.24
* 运营： 2014.05.30

### 二期

* 运营：2016.03.19

## 2 号线

### 一期

* 运营：2015.09.26

### 二期

* 运营：2019

## 3 号线

* 运营：2019

## 4 号线

* 运营：2020

## 5 号线

### 一期

* 运营：2022

### 二期

* 运营：2025

### 6 号线

* 运营：2025

### 7 号线

* 运营：2025

### 8 号线

* 运营：2025

### K1 快线

* 运营：2030

### K2 快线

* 运营：2030

## S3 线

* 运营：2019


```shell
docker stop ningbo-subway \
&& docker rm ningbo-subway \
&& cd /app/ningbo-subway \
&& sudo git pull \
&& docker build -t ningbo-subway . \
&& docker run -e TZ="Asia/Shanghai" -d -p 16111:3000 --name ningbo-subway ningbo-subway
```
