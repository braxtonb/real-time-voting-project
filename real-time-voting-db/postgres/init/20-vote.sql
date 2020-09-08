--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4 (Debian 12.4-1.pgdg100+1)
-- Dumped by pg_dump version 12.4

-- Started on 2020-09-08 02:07:42 UTC

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
-- TOC entry 203 (class 1259 OID 16393)
-- Name: Vote; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."Vote" (
    id bigint NOT NULL,
    username text NOT NULL,
    created timestamp without time zone NOT NULL,
    "franchiseId" bigint NOT NULL
);


ALTER TABLE public."Vote" OWNER TO admin;

--
-- TOC entry 204 (class 1259 OID 16406)
-- Name: Vote_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public."Vote" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Vote_id_seq"
    START WITH 6
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2912 (class 0 OID 16393)
-- Dependencies: 203
-- Data for Name: Vote; Type: TABLE DATA; Schema: public; Owner: admin
--

INSERT INTO public."Vote" OVERRIDING SYSTEM VALUE VALUES (1, 'User 1', '2020-09-07 18:33:00', 1);
INSERT INTO public."Vote" OVERRIDING SYSTEM VALUE VALUES (2, 'User 2', '2020-09-07 18:33:00', 2);
INSERT INTO public."Vote" OVERRIDING SYSTEM VALUE VALUES (3, 'User 3', '2020-09-07 18:33:00', 3);
INSERT INTO public."Vote" OVERRIDING SYSTEM VALUE VALUES (4, 'User 4', '2020-09-07 18:33:00', 4);
INSERT INTO public."Vote" OVERRIDING SYSTEM VALUE VALUES (5, 'User 5', '2020-09-07 18:33:00', 5);


--
-- TOC entry 2919 (class 0 OID 0)
-- Dependencies: 204
-- Name: Vote_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Vote_id_seq"', 6, false);


--
-- TOC entry 2784 (class 2606 OID 16400)
-- Name: Vote Vote_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Vote"
    ADD CONSTRAINT "Vote_pkey" PRIMARY KEY (id);


--
-- TOC entry 2785 (class 2606 OID 16401)
-- Name: Vote fk_franchise; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Vote"
    ADD CONSTRAINT fk_franchise FOREIGN KEY ("franchiseId") REFERENCES public."Franchise"(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2020-09-08 02:07:42 UTC

--
-- PostgreSQL database dump complete
--