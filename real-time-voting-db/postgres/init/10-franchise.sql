--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4 (Debian 12.4-1.pgdg100+1)
-- Dumped by pg_dump version 12.4

-- Started on 2020-09-08 02:06:52 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16385)
-- Name: Franchise; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."Franchise" (
    id bigint NOT NULL,
    title text NOT NULL
);


ALTER TABLE public."Franchise" OWNER TO admin;

--
-- TOC entry 205 (class 1259 OID 16408)
-- Name: Franchise_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public."Franchise" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Franchise_id_seq"
    START WITH 6
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2911 (class 0 OID 16385)
-- Dependencies: 202
-- Data for Name: Franchise; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public."Franchise" OVERRIDING SYSTEM VALUE VALUES (1, 'Lord of the Rings');
INSERT INTO public."Franchise" OVERRIDING SYSTEM VALUE VALUES (2, 'Star Wars');
INSERT INTO public."Franchise" OVERRIDING SYSTEM VALUE VALUES (3, 'Marvel Cinematic Universe');
INSERT INTO public."Franchise" OVERRIDING SYSTEM VALUE VALUES (4, 'Game of Thrones');
INSERT INTO public."Franchise" OVERRIDING SYSTEM VALUE VALUES (5, 'Harry Potter');


--
-- TOC entry 2918 (class 0 OID 0)
-- Dependencies: 205
-- Name: Franchise_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Franchise_id_seq"', 6, false);


--
-- TOC entry 2784 (class 2606 OID 16392)
-- Name: Franchise Franchise_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Franchise"
    ADD CONSTRAINT "Franchise_pkey" PRIMARY KEY (id);


-- Completed on 2020-09-08 02:06:52 UTC

--
-- PostgreSQL database dump complete
--